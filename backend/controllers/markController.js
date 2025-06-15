const Mark = require('../models/Mark');
const User = require('../models/User');
const { asyncHandler, AppError } = require('../middleware/errorHandler');
const config = require('../config/config');

// @desc    Get marks for a student
// @route   GET /api/marks/student/:studentId
// @access  Private (Student, Teacher, Admin)
const getStudentMarks = asyncHandler(async (req, res, next) => {
  const { studentId } = req.params;
  const { academicSession = config.ACADEMIC.CURRENT_SESSION, subject, examType } = req.query;

  // Verify student exists
  const student = await User.findById(studentId);
  if (!student || student.role !== config.ROLES.STUDENT) {
    return next(new AppError('Student not found', 404));
  }

  // Check permissions
  if (req.user.role === config.ROLES.STUDENT && req.user._id.toString() !== studentId) {
    return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
  }

  if (req.user.role === config.ROLES.TEACHER) {
    // Check if teacher has access to this student
    const hasAccess = req.user.assignedClasses.some(assignment => 
      assignment.class === student.class && assignment.section === student.section
    ) || (req.user.isClassTeacher && 
      req.user.classTeacherOf.class === student.class && 
      req.user.classTeacherOf.section === student.section);
    
    if (!hasAccess) {
      return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
    }
  }

  // Check fee status for students
  if (req.user.role === config.ROLES.STUDENT && req.user.feeStatus !== 'Paid') {
    return next(new AppError(config.MESSAGES.ERROR.FEE_PENDING, 403));
  }

  // Build query
  const query = {
    student: studentId,
    academicSession,
    isActive: true
  };

  if (subject) query.subject = subject;
  if (examType) query.examType = examType;

  const marks = await Mark.find(query)
    .populate('enteredBy', 'name')
    .sort({ subject: 1, examType: 1 });

  // Get summary
  const summary = await Mark.getStudentSummary(studentId, academicSession);

  res.status(200).json({
    success: true,
    data: {
      student: student.getPublicProfile(),
      marks,
      summary,
      academicSession
    }
  });
});

// @desc    Get marks for a class
// @route   GET /api/marks/class/:class/:section
// @access  Private (Teacher, Admin)
const getClassMarks = asyncHandler(async (req, res, next) => {
  const { class: className, section } = req.params;
  const { subject, examType, academicSession = config.ACADEMIC.CURRENT_SESSION } = req.query;

  // Check teacher access
  if (req.user.role === config.ROLES.TEACHER) {
    const hasAccess = req.user.assignedClasses.some(assignment => 
      assignment.class === className && assignment.section === section &&
      (!subject || assignment.subject === subject)
    ) || (req.user.isClassTeacher && 
      req.user.classTeacherOf.class === className && 
      req.user.classTeacherOf.section === section);
    
    if (!hasAccess) {
      return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
    }
  }

  // Build query
  const query = {
    class: className,
    section,
    academicSession,
    isActive: true
  };

  if (subject) query.subject = subject;
  if (examType) query.examType = examType;

  const marks = await Mark.find(query)
    .populate('student', 'name rollNumber admissionNumber')
    .populate('enteredBy', 'name')
    .sort({ subject: 1, examType: 1, 'student.rollNumber': 1 });

  // Get students in this class
  const students = await User.find({
    role: config.ROLES.STUDENT,
    class: className,
    section,
    isActive: true,
    isDeleted: false
  }).select('name rollNumber admissionNumber');

  res.status(200).json({
    success: true,
    data: {
      class: className,
      section,
      subject,
      examType,
      academicSession,
      marks,
      students,
      totalStudents: students.length
    }
  });
});

// @desc    Enter/Update marks
// @route   POST /api/marks
// @access  Private (Teacher, Admin)
const enterMarks = asyncHandler(async (req, res, next) => {
  const {
    student: studentId,
    class: className,
    section,
    subject,
    examType,
    maxMarks,
    obtainedMarks,
    isAbsent = false,
    remarks
  } = req.body;

  // Verify student exists
  const student = await User.findById(studentId);
  if (!student || student.role !== config.ROLES.STUDENT) {
    return next(new AppError('Student not found', 404));
  }

  // Check teacher access
  if (req.user.role === config.ROLES.TEACHER) {
    const hasAccess = req.user.assignedClasses.some(assignment => 
      assignment.class === className && assignment.section === section &&
      assignment.subject === subject
    ) || (req.user.isClassTeacher && 
      req.user.classTeacherOf.class === className && 
      req.user.classTeacherOf.section === section);
    
    if (!hasAccess) {
      return next(new AppError('You are not authorized to enter marks for this class/subject', 403));
    }
  }

  // Check if marks already exist
  const existingMark = await Mark.findOne({
    student: studentId,
    class: className,
    section,
    subject,
    examType,
    academicSession: config.ACADEMIC.CURRENT_SESSION
  });

  if (existingMark) {
    // Update existing marks
    existingMark.maxMarks = maxMarks;
    existingMark.obtainedMarks = isAbsent ? 0 : obtainedMarks;
    existingMark.isAbsent = isAbsent;
    existingMark.remarks = remarks;
    existingMark.lastModifiedBy = req.user._id;
    existingMark.lastModifiedAt = new Date();

    await existingMark.save();

    res.status(200).json({
      success: true,
      message: 'Marks updated successfully',
      data: {
        mark: existingMark
      }
    });
  } else {
    // Create new marks entry
    const mark = await Mark.create({
      student: studentId,
      class: className,
      section,
      subject,
      examType,
      maxMarks,
      obtainedMarks: isAbsent ? 0 : obtainedMarks,
      isAbsent,
      remarks,
      enteredBy: req.user._id
    });

    res.status(201).json({
      success: true,
      message: 'Marks entered successfully',
      data: {
        mark
      }
    });
  }
});

// @desc    Bulk enter marks
// @route   POST /api/marks/bulk
// @access  Private (Teacher, Admin)
const bulkEnterMarks = asyncHandler(async (req, res, next) => {
  const { marks } = req.body;
  
  if (!Array.isArray(marks) || marks.length === 0) {
    return next(new AppError('Marks array is required', 400));
  }

  const results = {
    success: [],
    errors: []
  };

  for (let i = 0; i < marks.length; i++) {
    try {
      const markData = marks[i];
      
      // Check teacher access for each mark
      if (req.user.role === config.ROLES.TEACHER) {
        const hasAccess = req.user.assignedClasses.some(assignment => 
          assignment.class === markData.class && 
          assignment.section === markData.section &&
          assignment.subject === markData.subject
        ) || (req.user.isClassTeacher && 
          req.user.classTeacherOf.class === markData.class && 
          req.user.classTeacherOf.section === markData.section);
        
        if (!hasAccess) {
          results.errors.push({
            index: i,
            data: markData,
            error: 'Not authorized for this class/subject'
          });
          continue;
        }
      }

      // Check if marks already exist
      const existingMark = await Mark.findOne({
        student: markData.student,
        class: markData.class,
        section: markData.section,
        subject: markData.subject,
        examType: markData.examType,
        academicSession: markData.academicSession || config.ACADEMIC.CURRENT_SESSION
      });

      if (existingMark) {
        // Update existing
        Object.assign(existingMark, {
          ...markData,
          lastModifiedBy: req.user._id,
          lastModifiedAt: new Date()
        });
        await existingMark.save();
        results.success.push({ index: i, mark: existingMark });
      } else {
        // Create new
        const mark = await Mark.create({
          ...markData,
          enteredBy: req.user._id,
          academicSession: markData.academicSession || config.ACADEMIC.CURRENT_SESSION
        });
        results.success.push({ index: i, mark });
      }
    } catch (error) {
      results.errors.push({
        index: i,
        data: marks[i],
        error: error.message
      });
    }
  }

  res.status(201).json({
    success: true,
    message: `Bulk marks entry completed. ${results.success.length} entries processed, ${results.errors.length} errors.`,
    data: results
  });
});

// @desc    Delete marks
// @route   DELETE /api/marks/:id
// @access  Private (Teacher, Admin)
const deleteMarks = asyncHandler(async (req, res, next) => {
  const mark = await Mark.findById(req.params.id);
  
  if (!mark) {
    return next(new AppError('Marks not found', 404));
  }

  // Check permissions
  if (req.user.role === config.ROLES.TEACHER) {
    const hasAccess = req.user.assignedClasses.some(assignment => 
      assignment.class === mark.class && 
      assignment.section === mark.section &&
      assignment.subject === mark.subject
    ) || (req.user.isClassTeacher && 
      req.user.classTeacherOf.class === mark.class && 
      req.user.classTeacherOf.section === mark.section);
    
    if (!hasAccess && mark.enteredBy.toString() !== req.user._id.toString()) {
      return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
    }
  }

  // Soft delete
  mark.isActive = false;
  mark.lastModifiedBy = req.user._id;
  mark.lastModifiedAt = new Date();
  await mark.save();

  res.status(200).json({
    success: true,
    message: 'Marks deleted successfully'
  });
});

// @desc    Get marks statistics
// @route   GET /api/marks/stats
// @access  Private (Admin)
const getMarksStats = asyncHandler(async (req, res) => {
  const { academicSession = config.ACADEMIC.CURRENT_SESSION } = req.query;

  const stats = await Promise.all([
    // Total marks entries
    Mark.countDocuments({ academicSession, isActive: true }),
    
    // Subject-wise count
    Mark.aggregate([
      { $match: { academicSession, isActive: true } },
      { $group: { _id: '$subject', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]),
    
    // Exam-wise count
    Mark.aggregate([
      { $match: { academicSession, isActive: true } },
      { $group: { _id: '$examType', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]),
    
    // Class-wise average
    Mark.aggregate([
      { $match: { academicSession, isActive: true, isAbsent: false } },
      {
        $group: {
          _id: { class: '$class', section: '$section' },
          avgPercentage: {
            $avg: { $multiply: [{ $divide: ['$obtainedMarks', '$maxMarks'] }, 100] }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.class': 1, '_id.section': 1 } }
    ])
  ]);

  const [totalEntries, subjectWise, examWise, classWiseAvg] = stats;

  res.status(200).json({
    success: true,
    data: {
      academicSession,
      overview: {
        totalEntries
      },
      subjectWise,
      examWise,
      classWiseAverage: classWiseAvg
    }
  });
});

module.exports = {
  getStudentMarks,
  getClassMarks,
  enterMarks,
  bulkEnterMarks,
  deleteMarks,
  getMarksStats
};