const express = require('express');
const Class = require('../models/Class');
const { authenticate, isAdmin, isTeacherOrAdmin } = require('../middleware/auth');
const { asyncHandler, AppError } = require('../middleware/errorHandler');
const { validateClassCreation, validateObjectId } = require('../middleware/validation');
const config = require('../config/config');

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// @desc    Get all classes
// @route   GET /api/classes
// @access  Private (Teacher, Admin)
router.get('/', isTeacherOrAdmin, asyncHandler(async (req, res) => {
  const { academicSession = config.ACADEMIC.CURRENT_SESSION } = req.query;
  
  let query = { academicSession, isActive: true };
  
  // If teacher, filter by assigned classes
  if (req.user.role === config.ROLES.TEACHER) {
    const teacherClasses = req.user.assignedClasses.map(ac => ({
      className: ac.class,
      section: ac.section
    }));
    
    if (req.user.isClassTeacher) {
      teacherClasses.push({
        className: req.user.classTeacherOf.class,
        section: req.user.classTeacherOf.section
      });
    }
    
    query.$or = teacherClasses.map(tc => ({
      className: tc.className,
      section: tc.section
    }));
  }
  
  const classes = await Class.find(query)
    .populate('classTeacher', 'name')
    .populate('subjectTeachers.teacher', 'name')
    .sort({ className: 1, section: 1 });

  res.status(200).json({
    success: true,
    data: { classes }
  });
}));

// @desc    Get class by ID
// @route   GET /api/classes/:id
// @access  Private (Teacher, Admin)
router.get('/:id', isTeacherOrAdmin, validateObjectId('id'), asyncHandler(async (req, res, next) => {
  const classData = await Class.findById(req.params.id)
    .populate('classTeacher', 'name mobile email')
    .populate('subjectTeachers.teacher', 'name mobile email')
    .populate('students', 'name rollNumber admissionNumber mobile');

  if (!classData) {
    return next(new AppError('Class not found', 404));
  }

  res.status(200).json({
    success: true,
    data: { class: classData }
  });
}));

// @desc    Create new class
// @route   POST /api/classes
// @access  Private (Admin)
router.post('/', isAdmin, validateClassCreation, asyncHandler(async (req, res, next) => {
  const {
    className,
    section,
    subjects,
    classTeacher,
    subjectTeachers,
    maxStrength,
    stream
  } = req.body;

  // Check if class-section combination already exists
  const existingClass = await Class.findOne({
    className,
    section,
    academicSession: config.ACADEMIC.CURRENT_SESSION
  });

  if (existingClass) {
    return next(new AppError('Class-Section combination already exists for this academic session', 400));
  }

  const classData = await Class.create({
    className,
    section,
    subjects,
    classTeacher,
    subjectTeachers,
    maxStrength,
    stream,
    createdBy: req.user._id
  });

  res.status(201).json({
    success: true,
    message: 'Class created successfully',
    data: { class: classData }
  });
}));

// @desc    Update class
// @route   PUT /api/classes/:id
// @access  Private (Admin)
router.put('/:id', isAdmin, validateObjectId('id'), asyncHandler(async (req, res, next) => {
  const classData = await Class.findById(req.params.id);
  
  if (!classData) {
    return next(new AppError('Class not found', 404));
  }

  const allowedFields = ['subjects', 'classTeacher', 'subjectTeachers', 'maxStrength', 'stream', 'isActive'];
  const updateData = {};
  
  Object.keys(req.body).forEach(key => {
    if (allowedFields.includes(key)) {
      updateData[key] = req.body[key];
    }
  });

  const updatedClass = await Class.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true, runValidators: true }
  ).populate('classTeacher', 'name')
    .populate('subjectTeachers.teacher', 'name');

  res.status(200).json({
    success: true,
    message: 'Class updated successfully',
    data: { class: updatedClass }
  });
}));

// @desc    Delete class
// @route   DELETE /api/classes/:id
// @access  Private (Admin)
router.delete('/:id', isAdmin, validateObjectId('id'), asyncHandler(async (req, res, next) => {
  const classData = await Class.findById(req.params.id);
  
  if (!classData) {
    return next(new AppError('Class not found', 404));
  }

  classData.isActive = false;
  await classData.save();

  res.status(200).json({
    success: true,
    message: 'Class deleted successfully'
  });
}));

module.exports = router;