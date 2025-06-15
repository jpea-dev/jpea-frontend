const User = require('../models/User');
const ResetRequest = require('../models/ResetRequest');
const { generateToken } = require('../middleware/auth');
const { asyncHandler, AppError } = require('../middleware/errorHandler');
const config = require('../config/config');

// @desc    Register user
// @route   POST /api/auth/register
// @access  Private (Admin only)
const register = asyncHandler(async (req, res, next) => {
  const {
    name,
    mobile,
    email,
    password,
    role,
    class: userClass,
    section,
    stream,
    subjects,
    employeeId,
    admissionNumber,
    parentMobile,
    address
  } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ mobile });
  if (existingUser) {
    return next(new AppError(config.MESSAGES.ERROR.MOBILE_EXISTS, 400));
  }

  // Check email if provided
  if (email) {
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return next(new AppError(config.MESSAGES.ERROR.EMAIL_EXISTS, 400));
    }
  }

  // Create user data
  const userData = {
    name,
    mobile,
    email,
    password,
    role,
    createdBy: req.user._id
  };

  // Add role-specific fields
  if (role === config.ROLES.STUDENT) {
    userData.class = userClass;
    userData.section = section;
    userData.stream = stream;
    userData.admissionNumber = admissionNumber;
    userData.parentMobile = parentMobile;
    userData.address = address;
  } else if (role === config.ROLES.TEACHER) {
    userData.employeeId = employeeId;
    userData.subjects = subjects;
    userData.qualification = req.body.qualification;
    userData.experience = req.body.experience;
    userData.joiningDate = req.body.joiningDate || new Date();
  }

  // Create user
  const user = await User.create(userData);

  res.status(201).json({
    success: true,
    message: config.MESSAGES.SUCCESS.USER_CREATED,
    data: {
      user: user.getPublicProfile()
    }
  });
});

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const login = asyncHandler(async (req, res, next) => {
  const { mobile, password } = req.body;

  // Find user and include password
  const user = await User.findOne({ mobile, isActive: true, isDeleted: false }).select('+password');

  if (!user || !(await user.comparePassword(password))) {
    return next(new AppError(config.MESSAGES.ERROR.INVALID_CREDENTIALS, 401));
  }

  // Update last login
  user.lastLogin = new Date();
  await user.save({ validateBeforeSave: false });

  // Generate token
  const token = generateToken(user._id);

  // Remove password from response
  const userResponse = user.getPublicProfile();

  res.status(200).json({
    success: true,
    message: config.MESSAGES.SUCCESS.LOGIN,
    data: {
      token,
      user: userResponse
    }
  });
});

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
const logout = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: config.MESSAGES.SUCCESS.LOGOUT
  });
});

// @desc    Get current user profile
// @route   GET /api/auth/profile
// @access  Private
const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    data: {
      user: user.getPublicProfile()
    }
  });
});

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
const updateProfile = asyncHandler(async (req, res, next) => {
  const allowedFields = ['name', 'email', 'address', 'parentMobile'];
  
  // Students can only update limited fields
  if (req.user.role === config.ROLES.STUDENT) {
    allowedFields.push('profileImage');
  }
  
  // Teachers can update additional fields
  if (req.user.role === config.ROLES.TEACHER) {
    allowedFields.push('qualification', 'experience', 'profileImage');
  }

  const updateData = {};
  Object.keys(req.body).forEach(key => {
    if (allowedFields.includes(key)) {
      updateData[key] = req.body[key];
    }
  });

  updateData.updatedBy = req.user._id;

  const user = await User.findByIdAndUpdate(
    req.user._id,
    updateData,
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    message: config.MESSAGES.SUCCESS.PROFILE_UPDATED,
    data: {
      user: user.getPublicProfile()
    }
  });
});

// @desc    Change password
// @route   PUT /api/auth/change-password
// @access  Private
const changePassword = asyncHandler(async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;

  // Get user with password
  const user = await User.findById(req.user._id).select('+password');

  // Check current password
  if (!(await user.comparePassword(currentPassword))) {
    return next(new AppError('Current password is incorrect', 400));
  }

  // Update password
  user.password = newPassword;
  user.updatedBy = req.user._id;
  await user.save();

  res.status(200).json({
    success: true,
    message: config.MESSAGES.SUCCESS.PASSWORD_CHANGED
  });
});

// @desc    Request password reset
// @route   POST /api/auth/request-reset
// @access  Public
const requestPasswordReset = asyncHandler(async (req, res, next) => {
  const { mobile, reason, requestType, alternateContact, parentContact } = req.body;

  // Find user
  const user = await User.findOne({ mobile, isActive: true, isDeleted: false });
  if (!user) {
    return next(new AppError(config.MESSAGES.ERROR.USER_NOT_FOUND, 404));
  }

  // Check if user already has a pending request
  const existingRequest = await ResetRequest.findOne({
    user: user._id,
    status: 'pending'
  });

  if (existingRequest) {
    return next(new AppError('You already have a pending password reset request', 400));
  }

  // Create reset request
  const resetRequest = await ResetRequest.create({
    user: user._id,
    mobile,
    reason,
    requestType: requestType || 'forgot_password',
    alternateContact,
    parentContact,
    ipAddress: req.ip,
    userAgent: req.get('User-Agent')
  });

  res.status(201).json({
    success: true,
    message: 'Password reset request submitted successfully. Admin will contact you soon.',
    data: {
      requestId: resetRequest._id,
      whatsappLink: config.WHATSAPP.ADMIN_LINK,
      adminContact: config.ADMIN_PHONE
    }
  });
});

// @desc    Get password reset requests (Admin only)
// @route   GET /api/auth/reset-requests
// @access  Private (Admin)
const getResetRequests = asyncHandler(async (req, res) => {
  const { status = 'pending', page = 1, limit = 10 } = req.query;

  const query = status === 'all' ? {} : { status };
  
  const requests = await ResetRequest.find(query)
    .populate('user', 'name mobile role class section')
    .populate('processedBy', 'name')
    .sort({ requestedAt: -1 })
    .limit(limit * 1)
    .skip((page - 1) * limit);

  const total = await ResetRequest.countDocuments(query);

  res.status(200).json({
    success: true,
    data: {
      requests,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total
      }
    }
  });
});

// @desc    Process password reset request (Admin only)
// @route   PUT /api/auth/reset-requests/:id
// @access  Private (Admin)
const processResetRequest = asyncHandler(async (req, res, next) => {
  const { status, adminNotes, newPassword } = req.body;
  const requestId = req.params.id;

  const resetRequest = await ResetRequest.findById(requestId).populate('user');
  if (!resetRequest) {
    return next(new AppError('Reset request not found', 404));
  }

  if (resetRequest.status !== 'pending') {
    return next(new AppError('This request has already been processed', 400));
  }

  // Update request status
  await resetRequest.markAsProcessed(req.user._id, status, adminNotes);

  // If approved and new password provided, update user password
  if (status === 'approved' && newPassword) {
    const user = resetRequest.user;
    user.password = newPassword;
    user.updatedBy = req.user._id;
    await user.save();

    resetRequest.status = 'completed';
    await resetRequest.save();
  }

  res.status(200).json({
    success: true,
    message: `Password reset request ${status} successfully`,
    data: {
      request: resetRequest
    }
  });
});

module.exports = {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  changePassword,
  requestPasswordReset,
  getResetRequests,
  processResetRequest
};