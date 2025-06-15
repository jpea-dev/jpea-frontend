const express = require('express');
const {
  getStudentMarks,
  getClassMarks,
  enterMarks,
  bulkEnterMarks,
  deleteMarks,
  getMarksStats
} = require('../controllers/markController');
const { 
  authenticate, 
  isAdmin, 
  isTeacherOrAdmin, 
  checkFeeStatus,
  checkTeacherAccess 
} = require('../middleware/auth');
const {
  validateMarkEntry,
  validateObjectId,
  validatePagination
} = require('../middleware/validation');

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Student, Teacher, Admin routes (with fee check for students)
router.get('/student/:studentId', checkFeeStatus, validateObjectId('studentId'), getStudentMarks);

// Teacher, Admin routes
router.get('/class/:class/:section', isTeacherOrAdmin, checkTeacherAccess, getClassMarks);
router.post('/', isTeacherOrAdmin, validateMarkEntry, checkTeacherAccess, enterMarks);
router.post('/bulk', isTeacherOrAdmin, bulkEnterMarks);
router.delete('/:id', isTeacherOrAdmin, validateObjectId('id'), deleteMarks);

// Admin only routes
router.get('/stats', isAdmin, validatePagination, getMarksStats);

module.exports = router;