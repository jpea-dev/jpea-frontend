const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config/config');

// Verify JWT token
const authenticate = async (req, res, next) => {
  try {
    let token;
    
    // Get token from header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: config.MESSAGES.ERROR.UNAUTHORIZED
      });
    }
    
    // Verify token
    const decoded = jwt.verify(token, config.JWT_SECRET);
    
    // Get user from token
    const user = await User.findById(decoded.id).select('+password');
    
    if (!user || !user.isActive || user.isDeleted) {
      return res.status(401).json({
        success: false,
        message: config.MESSAGES.ERROR.USER_NOT_FOUND
      });
    }
    
    // Update last login
    user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });
    
    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({
      success: false,
      message: config.MESSAGES.ERROR.INVALID_TOKEN
    });
  }
};

// Role-based authorization
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: config.MESSAGES.ERROR.UNAUTHORIZED
      });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: config.MESSAGES.ERROR.UNAUTHORIZED
      });
    }
    
    next();
  };
};

// Specific role middlewares
const isAdmin = authorize(config.ROLES.ADMIN);
const isTeacher = authorize(config.ROLES.TEACHER);
const isStudent = authorize(config.ROLES.STUDENT);
const isTeacherOrAdmin = authorize(config.ROLES.ADMIN, config.ROLES.TEACHER);
const isStudentOrTeacher = authorize(config.ROLES.STUDENT, config.ROLES.TEACHER);

// Check if student has paid fees (for accessing academic content)
const checkFeeStatus = async (req, res, next) => {
  try {
    if (req.user.role !== config.ROLES.STUDENT) {
      return next();
    }
    
    if (req.user.feeStatus !== 'Paid') {
      return res.status(403).json({
        success: false,
        message: config.MESSAGES.ERROR.FEE_PENDING,
        data: {
          feeStatus: req.user.feeStatus,
          feeAmount: req.user.feeAmount,
          feePaidAmount: req.user.feePaidAmount,
          feeBalance: req.user.feeBalance,
          whatsappLink: config.WHATSAPP.ADMIN_LINK
        }
      });
    }
    
    next();
  } catch (error) {
    console.error('Fee status check error:', error);
    return res.status(500).json({
      success: false,
      message: config.MESSAGES.ERROR.SERVER_ERROR
    });
  }
};

// Check if teacher can access specific class/subject
const checkTeacherAccess = async (req, res, next) => {
  try {
    if (req.user.role !== config.ROLES.TEACHER) {
      return next();
    }
    
    const { classId, subject } = req.params;
    const { class: className, section } = req.body;
    
    // If teacher is admin, allow access
    if (req.user.role === config.ROLES.ADMIN) {
      return next();
    }
    
    // Check if teacher is assigned to this class/subject
    const hasAccess = req.user.assignedClasses.some(assignment => 
      (assignment.class === className || assignment.class === classId) &&
      (assignment.section === section) &&
      (assignment.subject === subject || !subject)
    );
    
    // Check if teacher is class teacher
    const isClassTeacher = req.user.isClassTeacher && 
      req.user.classTeacherOf &&
      (req.user.classTeacherOf.class === className || req.user.classTeacherOf.class === classId) &&
      (req.user.classTeacherOf.section === section);
    
    if (!hasAccess && !isClassTeacher) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. You are not assigned to this class/subject.'
      });
    }
    
    next();
  } catch (error) {
    console.error('Teacher access check error:', error);
    return res.status(500).json({
      success: false,
      message: config.MESSAGES.ERROR.SERVER_ERROR
    });
  }
};

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, config.JWT_SECRET, {
    expiresIn: config.JWT_EXPIRE
  });
};

module.exports = {
  authenticate,
  authorize,
  isAdmin,
  isTeacher,
  isStudent,
  isTeacherOrAdmin,
  isStudentOrTeacher,
  checkFeeStatus,
  checkTeacherAccess,
  generateToken
};