const express = require('express');
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  updateFeeStatus,
  getDashboardStats,
  bulkImportUsers
} = require('../controllers/userController');
const { authenticate, isAdmin, isTeacherOrAdmin } = require('../middleware/auth');
const {
  validateUserUpdate,
  validateObjectId,
  validatePagination,
  validateSearch
} = require('../middleware/validation');

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Admin only routes
router.get('/stats', isAdmin, getDashboardStats);
router.post('/bulk-import', isAdmin, bulkImportUsers);

// Admin and Teacher routes
router.get('/', isTeacherOrAdmin, validatePagination, validateSearch, getUsers);
router.get('/:id', isTeacherOrAdmin, validateObjectId('id'), getUserById);
router.put('/:id', isTeacherOrAdmin, validateObjectId('id'), validateUserUpdate, updateUser);
router.put('/:id/fee-status', isTeacherOrAdmin, validateObjectId('id'), updateFeeStatus);

// Admin only routes
router.delete('/:id', isAdmin, validateObjectId('id'), deleteUser);

module.exports = router;