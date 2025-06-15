const User = require('../models/User');
const Class = require('../models/Class');
const { asyncHandler, AppError } = require('../middleware/errorHandler');
const config = require('../config/config');

// @desc    Get all users with filters
// @route   GET /api/users
// @access  Private (Admin)
const getUsers = asyncHandler(async (req, res) => {
  const {
    role,
    class: userClass,
    section,
    search,
    isActive = 'true',
    page = 1,
    limit = 10,
    sortBy = 'createdAt',
    sortOrder = 'desc'
  } = req.query;

  // Build query
  const query = {};
  
  if (role && role !== 'all') query.role = role;
  if (userClass && userClass !== 'all') query.class = userClass;
  if (section && section !== 'all') query.section = section;
  if (isActive !== 'all') query.isActive = isActive === 'true';

  // Search functionality
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { mobile: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } },
      { employeeId: { $regex: search, $options: 'i' } },
      { admissionNumber: { $regex: search, $options: 'i' } }
    ];
  }

  // Sort options
  const sortOptions = {};
  sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

  // Execute query with pagination
  const users = await User.find(query)
    .sort(sortOptions)
    .limit(limit * 1)
    .skip((page - 1) * limit)
    .select('-password');

  const total = await User.countDocuments(query);

  res.status(200).json({
    success: true,
    data: {
      users,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / limit),
        total,
        limit: parseInt(limit)
      }
    }
  });
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private
const getUserById = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).select('-password');
  
  if (!user) {
    return next(new AppError(config.MESSAGES.ERROR.USER_NOT_FOUND, 404));
  }

  // Check permissions
  if (req.user.role !== config.ROLES.ADMIN && req.user._id.toString() !== user._id.toString()) {
    // Teachers can view students in their classes
    if (req.user.role === config.ROLES.TEACHER && user.role === config.ROLES.STUDENT) {
      const hasAccess = req.user.assignedClasses.some(assignment => 
        assignment.class === user.class && assignment.section === user.section
      ) || (req.user.isClassTeacher && 
        req.user.classTeacherOf.class === user.class && 
        req.user.classTeacherOf.section === user.section);
      
      if (!hasAccess) {
        return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
      }
    } else {
      return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
    }
  }

  res.status(200).json({
    success: true,
    data: {
      user: user.getPublicProfile()
    }
  });
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private (Admin or Class Teacher for students)
const updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    return next(new AppError(config.MESSAGES.ERROR.USER_NOT_FOUND, 404));
  }

  // Check permissions
  if (req.user.role !== config.ROLES.ADMIN) {
    // Class teachers can update their students
    if (req.user.role === config.ROLES.TEACHER && user.role === config.ROLES.STUDENT) {
      const isClassTeacher = req.user.isClassTeacher && 
        req.user.classTeacherOf.class === user.class && 
        req.user.classTeacherOf.section === user.section;
      
      if (!isClassTeacher) {
        return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
      }
    } else {
      return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
    }
  }

  // Define allowed fields based on role
  const allowedFields = ['name', 'email', 'address', 'parentMobile', 'profileImage'];
  
  if (req.user.role === config.ROLES.ADMIN) {
    allowedFields.push('class', 'section', 'stream', 'subjects', 'assignedClasses', 
      'isClassTeacher', 'classTeacherOf', 'qualification', 'experience', 'isActive');
  }

  // Build update data
  const updateData = {};
  Object.keys(req.body).forEach(key => {
    if (allowedFields.includes(key)) {
      updateData[key] = req.body[key];
    }
  });

  updateData.updatedBy = req.user._id;

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true, runValidators: true }
  ).select('-password');

  res.status(200).json({
    success: true,
    message: config.MESSAGES.SUCCESS.USER_UPDATED,
    data: {
      user: updatedUser.getPublicProfile()
    }
  });
});

// @desc    Soft delete user
// @route   DELETE /api/users/:id
// @access  Private (Admin only)
const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    return next(new AppError(config.MESSAGES.ERROR.USER_NOT_FOUND, 404));
  }

  // Prevent deleting self
  if (user._id.toString() === req.user._id.toString()) {
    return next(new AppError('You cannot delete your own account', 400));
  }

  // Soft delete
  user.isDeleted = true;
  user.isActive = false;
  user.updatedBy = req.user._id;
  await user.save();

  res.status(200).json({
    success: true,
    message: config.MESSAGES.SUCCESS.USER_DELETED
  });
});

// @desc    Update fee status (Class Teacher or Admin)
// @route   PUT /api/users/:id/fee-status
// @access  Private (Admin or Class Teacher)
const updateFeeStatus = asyncHandler(async (req, res, next) => {
  const { feeStatus, feeAmount, feePaidAmount } = req.body;
  
  const user = await User.findById(req.params.id);
  
  if (!user || user.role !== config.ROLES.STUDENT) {
    return next(new AppError('Student not found', 404));
  }

  // Check permissions
  if (req.user.role !== config.ROLES.ADMIN) {
    const isClassTeacher = req.user.isClassTeacher && 
      req.user.classTeacherOf.class === user.class && 
      req.user.classTeacherOf.section === user.section;
    
    if (!isClassTeacher) {
      return next(new AppError(config.MESSAGES.ERROR.UNAUTHORIZED, 403));
    }
  }

  // Update fee information
  user.feeStatus = feeStatus;
  if (feeAmount !== undefined) user.feeAmount = feeAmount;
  if (feePaidAmount !== undefined) user.feePaidAmount = feePaidAmount;
  user.feeLastUpdated = new Date();
  user.updatedBy = req.user._id;

  await user.save();

  res.status(200).json({
    success: true,
    message: config.MESSAGES.SUCCESS.FEE_STATUS_UPDATED,
    data: {
      user: user.getPublicProfile()
    }
  });
});

// @desc    Get dashboard statistics
// @route   GET /api/users/stats
// @access  Private (Admin)
const getDashboardStats = asyncHandler(async (req, res) => {
  const stats = await Promise.all([
    User.countDocuments({ role: config.ROLES.STUDENT, isActive: true, isDeleted: false }),
    User.countDocuments({ role: config.ROLES.TEACHER, isActive: true, isDeleted: false }),
    User.countDocuments({ role: config.ROLES.ADMIN, isActive: true, isDeleted: false }),
    User.countDocuments({ isActive: true, isDeleted: false }),
    User.countDocuments({ isActive: false, isDeleted: false }),
    User.countDocuments({ role: config.ROLES.STUDENT, feeStatus: 'Paid', isActive: true }),
    User.countDocuments({ role: config.ROLES.STUDENT, feeStatus: 'Pending', isActive: true }),
  ]);

  const [
    totalStudents,
    totalTeachers,
    totalAdmins,
    totalActiveUsers,
    totalInactiveUsers,
    studentsPaid,
    studentsPending
  ] = stats;

  // Get class-wise student count
  const classWiseStats = await User.aggregate([
    {
      $match: {
        role: config.ROLES.STUDENT,
        isActive: true,
        isDeleted: false
      }
    },
    {
      $group: {
        _id: { class: '$class', section: '$section' },
        count: { $sum: 1 }
      }
    },
    {
      $sort: { '_id.class': 1, '_id.section': 1 }
    }
  ]);

  res.status(200).json({
    success: true,
    data: {
      overview: {
        totalStudents,
        totalTeachers,
        totalAdmins,
        totalActiveUsers,
        totalInactiveUsers,
        totalUsers: totalActiveUsers + totalInactiveUsers
      },
      students: {
        total: totalStudents,
        feePaid: studentsPaid,
        feePending: studentsPending,
        feePercentage: totalStudents > 0 ? ((studentsPaid / totalStudents) * 100).toFixed(2) : 0
      },
      classWise: classWiseStats
    }
  });
});

// @desc    Bulk import users
// @route   POST /api/users/bulk-import
// @access  Private (Admin only)
const bulkImportUsers = asyncHandler(async (req, res, next) => {
  const { users } = req.body;
  
  if (!Array.isArray(users) || users.length === 0) {
    return next(new AppError('Users array is required', 400));
  }

  const results = {
    success: [],
    errors: []
  };

  for (let i = 0; i < users.length; i++) {
    try {
      const userData = { ...users[i], createdBy: req.user._id };
      
      // Check if user already exists
      const existingUser = await User.findOne({ mobile: userData.mobile });
      if (existingUser) {
        results.errors.push({
          index: i,
          data: userData,
          error: 'Mobile number already exists'
        });
        continue;
      }

      const user = await User.create(userData);
      results.success.push({
        index: i,
        user: user.getPublicProfile()
      });
    } catch (error) {
      results.errors.push({
        index: i,
        data: users[i],
        error: error.message
      });
    }
  }

  res.status(201).json({
    success: true,
    message: `Bulk import completed. ${results.success.length} users created, ${results.errors.length} errors.`,
    data: results
  });
});

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateFeeStatus,
  getDashboardStats,
  bulkImportUsers
};