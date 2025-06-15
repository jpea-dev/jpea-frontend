const express = require('express');
const {
  register,
  login,
  logout,
  getProfile,
  updateProfile,
  changePassword,
  requestPasswordReset,
  getResetRequests,
  processResetRequest
} = require('../controllers/authController');
const { authenticate, isAdmin } = require('../middleware/auth');
const {
  validateUserRegistration,
  validateLogin,
  validateUserUpdate,
  validatePasswordChange,
  validateResetRequest,
  validateObjectId
} = require('../middleware/validation');
const { authLimiter, resetLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Public routes
router.post('/login', authLimiter, validateLogin, login);
router.post('/request-reset', resetLimiter, validateResetRequest, requestPasswordReset);

// Protected routes
router.use(authenticate); // All routes below require authentication

router.post('/register', isAdmin, validateUserRegistration, register);
router.post('/logout', logout);
router.get('/profile', getProfile);
router.put('/profile', validateUserUpdate, updateProfile);
router.put('/change-password', validatePasswordChange, changePassword);

// Admin only routes
router.get('/reset-requests', isAdmin, getResetRequests);
router.put('/reset-requests/:id', isAdmin, validateObjectId('id'), processResetRequest);

module.exports = router;