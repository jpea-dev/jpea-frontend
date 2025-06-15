const dotenv = require('dotenv');
dotenv.config();

const config = {
  // Server Configuration
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Database Configuration
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/jpea_db',
  
  // JWT Configuration
  JWT_SECRET: process.env.JWT_SECRET || 'fallback_secret_key_change_in_production',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '7d',
  
  // Frontend Configuration
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  
  // Admin Configuration
  ADMIN_WHATSAPP: process.env.ADMIN_WHATSAPP || '+919450378136',
  ADMIN_PHONE: process.env.ADMIN_PHONE || '9450378136',
  
  // User Roles
  ROLES: {
    ADMIN: 'admin',
    TEACHER: 'teacher',
    STUDENT: 'student'
  },
  
  // Feature Toggles
  FEATURES: {
    MOBILE_LOGIN: process.env.ENABLE_MOBILE_LOGIN === 'true',
    PASSWORD_RESET: process.env.ENABLE_PASSWORD_RESET === 'true',
    BULK_OPERATIONS: process.env.ENABLE_BULK_OPERATIONS === 'true',
    ANNOUNCEMENTS: process.env.ENABLE_ANNOUNCEMENTS === 'true'
  },
  
  // Rate Limiting
  RATE_LIMIT: {
    WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100
  },
  
  // File Upload Configuration
  UPLOAD: {
    MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024, // 5MB
    ALLOWED_TYPES: process.env.ALLOWED_FILE_TYPES?.split(',') || ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']
  },
  
  // Database Collections
  COLLECTIONS: {
    USERS: 'users',
    MARKS: 'marks',
    CLASSES: 'classes',
    SUBJECTS: 'subjects',
    RESET_REQUESTS: 'reset_requests',
    FEE_STATUS: 'fee_status',
    ANNOUNCEMENTS: 'announcements'
  },
  
  // Default Admin Credentials
  DEFAULT_ADMIN: {
    mobile: '9450378136',
    password: 'admin123',
    name: 'System Administrator',
    email: 'admin@jpeducationacademy.in'
  },
  
  // Academic Configuration
  ACADEMIC: {
    CURRENT_SESSION: '2024-25',
    CLASSES: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    STREAMS: ['Science', 'Commerce', 'Arts'],
    SUBJECTS: {
      PRIMARY: ['English', 'Hindi', 'Mathematics', 'EVS', 'Computer'],
      MIDDLE: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer'],
      SECONDARY: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer'],
      SENIOR_SCIENCE: ['English', 'Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'Physical Education'],
      SENIOR_COMMERCE: ['English', 'Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'Computer Science'],
      SENIOR_ARTS: ['English', 'Hindi', 'History', 'Geography', 'Political Science', 'Economics']
    }
  },
  
  // WhatsApp Integration
  WHATSAPP: {
    ADMIN_LINK: `https://wa.me/${process.env.ADMIN_WHATSAPP?.replace('+', '') || '919450378136'}`,
    PASSWORD_RESET_MESSAGE: 'Hello, I need help resetting my password for JP Education Academy portal. My details are:'
  },
  
  // Response Messages
  MESSAGES: {
    SUCCESS: {
      LOGIN: 'Login successful',
      LOGOUT: 'Logout successful',
      PROFILE_UPDATED: 'Profile updated successfully',
      PASSWORD_CHANGED: 'Password changed successfully',
      USER_CREATED: 'User created successfully',
      USER_UPDATED: 'User updated successfully',
      USER_DELETED: 'User deleted successfully',
      MARKS_UPDATED: 'Marks updated successfully',
      FEE_STATUS_UPDATED: 'Fee status updated successfully'
    },
    ERROR: {
      INVALID_CREDENTIALS: 'Invalid mobile number or password',
      UNAUTHORIZED: 'Access denied. Insufficient permissions',
      USER_NOT_FOUND: 'User not found',
      INVALID_TOKEN: 'Invalid or expired token',
      MOBILE_EXISTS: 'Mobile number already registered',
      EMAIL_EXISTS: 'Email already registered',
      WEAK_PASSWORD: 'Password must be at least 6 characters long',
      INVALID_MOBILE: 'Invalid mobile number format',
      FEE_PENDING: 'Access denied. Fee payment is pending',
      SERVER_ERROR: 'Internal server error',
      VALIDATION_ERROR: 'Validation error',
      FILE_TOO_LARGE: 'File size exceeds maximum limit',
      INVALID_FILE_TYPE: 'Invalid file type'
    }
  }
};

module.exports = config;