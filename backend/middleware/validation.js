const { body, param, query, validationResult } = require('express-validator');
const config = require('../config/config');

// Handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: config.MESSAGES.ERROR.VALIDATION_ERROR,
      errors: errors.array()
    });
  }
  
  next();
};

// Common validation rules
const mobileValidation = body('mobile')
  .matches(/^[6-9]\d{9}$/)
  .withMessage('Please enter a valid 10-digit mobile number');

const passwordValidation = body('password')
  .isLength({ min: 6 })
  .withMessage('Password must be at least 6 characters long');

const nameValidation = body('name')
  .trim()
  .isLength({ min: 2, max: 100 })
  .withMessage('Name must be between 2 and 100 characters');

const emailValidation = body('email')
  .optional()
  .isEmail()
  .normalizeEmail()
  .withMessage('Please enter a valid email address');

// User validation rules
const validateUserRegistration = [
  nameValidation,
  mobileValidation,
  emailValidation,
  passwordValidation,
  body('role')
    .isIn([config.ROLES.ADMIN, config.ROLES.TEACHER, config.ROLES.STUDENT])
    .withMessage('Invalid role specified'),
  body('class')
    .optional()
    .isIn(config.ACADEMIC.CLASSES)
    .withMessage('Invalid class specified'),
  body('stream')
    .optional()
    .isIn(config.ACADEMIC.STREAMS)
    .withMessage('Invalid stream specified'),
  handleValidationErrors
];

const validateUserUpdate = [
  nameValidation.optional(),
  emailValidation,
  body('class')
    .optional()
    .isIn(config.ACADEMIC.CLASSES)
    .withMessage('Invalid class specified'),
  body('stream')
    .optional()
    .isIn(config.ACADEMIC.STREAMS)
    .withMessage('Invalid stream specified'),
  body('section')
    .optional()
    .isLength({ min: 1, max: 5 })
    .withMessage('Section must be between 1 and 5 characters'),
  handleValidationErrors
];

const validateLogin = [
  mobileValidation,
  passwordValidation,
  handleValidationErrors
];

const validatePasswordChange = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  body('newPassword')
    .isLength({ min: 6 })
    .withMessage('New password must be at least 6 characters long'),
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error('Password confirmation does not match');
      }
      return true;
    }),
  handleValidationErrors
];

// Mark validation rules
const validateMarkEntry = [
  body('student')
    .isMongoId()
    .withMessage('Invalid student ID'),
  body('subject')
    .notEmpty()
    .withMessage('Subject is required'),
  body('examType')
    .isIn(['Unit Test 1', 'Unit Test 2', 'Mid Term', 'Final Term', 'Annual', 'Practical'])
    .withMessage('Invalid exam type'),
  body('maxMarks')
    .isInt({ min: 1, max: 1000 })
    .withMessage('Maximum marks must be between 1 and 1000'),
  body('obtainedMarks')
    .isInt({ min: 0 })
    .withMessage('Obtained marks must be a non-negative number')
    .custom((value, { req }) => {
      if (value > req.body.maxMarks) {
        throw new Error('Obtained marks cannot exceed maximum marks');
      }
      return true;
    }),
  body('class')
    .isIn(config.ACADEMIC.CLASSES)
    .withMessage('Invalid class specified'),
  body('section')
    .notEmpty()
    .withMessage('Section is required'),
  handleValidationErrors
];

// Reset request validation
const validateResetRequest = [
  mobileValidation,
  body('reason')
    .isLength({ min: 10, max: 500 })
    .withMessage('Reason must be between 10 and 500 characters'),
  body('requestType')
    .optional()
    .isIn(['forgot_password', 'account_locked', 'security_concern', 'other'])
    .withMessage('Invalid request type'),
  handleValidationErrors
];

// Class validation rules
const validateClassCreation = [
  body('className')
    .isIn(config.ACADEMIC.CLASSES)
    .withMessage('Invalid class name'),
  body('section')
    .isLength({ min: 1, max: 5 })
    .withMessage('Section must be between 1 and 5 characters'),
  body('subjects')
    .isArray({ min: 1 })
    .withMessage('At least one subject is required'),
  body('maxStrength')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Maximum strength must be between 1 and 100'),
  handleValidationErrors
];

// Announcement validation rules
const validateAnnouncement = [
  body('title')
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters'),
  body('content')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Content must be between 10 and 2000 characters'),
  body('type')
    .optional()
    .isIn(['general', 'academic', 'event', 'holiday', 'exam', 'fee', 'urgent'])
    .withMessage('Invalid announcement type'),
  body('priority')
    .optional()
    .isIn(['low', 'medium', 'high', 'urgent'])
    .withMessage('Invalid priority level'),
  handleValidationErrors
];

// Parameter validation
const validateObjectId = (paramName) => [
  param(paramName)
    .isMongoId()
    .withMessage(`Invalid ${paramName} ID`),
  handleValidationErrors
];

// Query validation
const validatePagination = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  handleValidationErrors
];

const validateSearch = [
  query('search')
    .optional()
    .isLength({ min: 2, max: 100 })
    .withMessage('Search term must be between 2 and 100 characters'),
  handleValidationErrors
];

module.exports = {
  handleValidationErrors,
  validateUserRegistration,
  validateUserUpdate,
  validateLogin,
  validatePasswordChange,
  validateMarkEntry,
  validateResetRequest,
  validateClassCreation,
  validateAnnouncement,
  validateObjectId,
  validatePagination,
  validateSearch
};