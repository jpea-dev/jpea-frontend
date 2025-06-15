const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const connectDB = require('./config/database');
const config = require('./config/config');
const seedAdmin = require('./utils/seedAdmin');
const { globalErrorHandler, notFound } = require('./middleware/errorHandler');
const { generalLimiter } = require('./middleware/rateLimiter');

// Import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const markRoutes = require('./routes/marks');
const classRoutes = require('./routes/classes');

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// CORS configuration
app.use(cors({
  origin: [config.FRONTEND_URL, 'http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Compression middleware
app.use(compression());

// Rate limiting
app.use(generalLimiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging in development
if (config.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
    next();
  });
}

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'JP Education Academy API is running',
    timestamp: new Date().toISOString(),
    environment: config.NODE_ENV,
    version: '1.0.0'
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/marks', markRoutes);
app.use('/api/classes', classRoutes);

// Welcome route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to JP Education Academy API',
    documentation: '/api/docs',
    health: '/health',
    version: '1.0.0',
    features: {
      authentication: 'JWT-based authentication',
      roles: ['Admin', 'Teacher', 'Student'],
      features: [
        'User Management',
        'Marks Management',
        'Class Management',
        'Fee Status Tracking',
        'Password Reset Requests',
        'Role-based Access Control'
      ]
    }
  });
});

// API documentation route
app.get('/api/docs', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'JP Education Academy API Documentation',
    baseUrl: req.protocol + '://' + req.get('host'),
    endpoints: {
      authentication: {
        login: 'POST /api/auth/login',
        register: 'POST /api/auth/register (Admin only)',
        profile: 'GET /api/auth/profile',
        updateProfile: 'PUT /api/auth/profile',
        changePassword: 'PUT /api/auth/change-password',
        requestReset: 'POST /api/auth/request-reset',
        resetRequests: 'GET /api/auth/reset-requests (Admin only)'
      },
      users: {
        getUsers: 'GET /api/users',
        getUserById: 'GET /api/users/:id',
        updateUser: 'PUT /api/users/:id',
        deleteUser: 'DELETE /api/users/:id (Admin only)',
        updateFeeStatus: 'PUT /api/users/:id/fee-status',
        getDashboardStats: 'GET /api/users/stats (Admin only)',
        bulkImport: 'POST /api/users/bulk-import (Admin only)'
      },
      marks: {
        getStudentMarks: 'GET /api/marks/student/:studentId',
        getClassMarks: 'GET /api/marks/class/:class/:section',
        enterMarks: 'POST /api/marks',
        bulkEnterMarks: 'POST /api/marks/bulk',
        deleteMarks: 'DELETE /api/marks/:id',
        getMarksStats: 'GET /api/marks/stats (Admin only)'
      },
      classes: {
        getClasses: 'GET /api/classes',
        getClassById: 'GET /api/classes/:id',
        createClass: 'POST /api/classes (Admin only)',
        updateClass: 'PUT /api/classes/:id (Admin only)',
        deleteClass: 'DELETE /api/classes/:id (Admin only)'
      }
    },
    authentication: {
      type: 'Bearer Token',
      header: 'Authorization: Bearer <token>',
      loginEndpoint: '/api/auth/login'
    },
    roles: {
      admin: 'Full access to all endpoints',
      teacher: 'Access to assigned classes and students',
      student: 'Access to own profile and marks (if fee paid)'
    }
  });
});

// 404 handler
app.use(notFound);

// Global error handler
app.use(globalErrorHandler);

// Start server
const PORT = config.PORT;
const server = app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT} in ${config.NODE_ENV} mode`);
  console.log(`🌐 Frontend URL: ${config.FRONTEND_URL}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api/docs`);
  console.log(`❤️  Health Check: http://localhost:${PORT}/health`);
  
  // Seed default admin
  await seedAdmin();
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`❌ Unhandled Rejection: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log(`❌ Uncaught Exception: ${err.message}`);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('💤 Process terminated');
  });
});

module.exports = app;