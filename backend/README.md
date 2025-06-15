# JP Education Academy - Backend API

A comprehensive backend system for JP Education Academy built with Node.js, Express.js, and MongoDB.

## 🚀 Features

### User Management
- **Role-based Authentication**: Admin, Teacher, Student roles
- **JWT-based Security**: Secure token-based authentication
- **Profile Management**: Complete user profile system
- **Password Reset**: Admin-managed password reset requests

### Academic Management
- **Marks System**: Comprehensive marks entry and tracking
- **Class Management**: Class and section organization
- **Subject Assignment**: Teacher-subject mapping
- **Fee Status Tracking**: Student fee payment status

### Security & Performance
- **Rate Limiting**: Protection against abuse
- **Input Validation**: Comprehensive data validation
- **Error Handling**: Centralized error management
- **CORS Configuration**: Secure cross-origin requests

## 📁 Project Structure

```
backend/
├── config/
│   ├── config.js          # Centralized configuration
│   └── database.js        # MongoDB connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── userController.js  # User management
│   └── markController.js  # Marks management
├── middleware/
│   ├── auth.js            # Authentication middleware
│   ├── validation.js      # Input validation
│   ├── errorHandler.js    # Error handling
│   └── rateLimiter.js     # Rate limiting
├── models/
│   ├── User.js            # User schema
│   ├── Mark.js            # Marks schema
│   ├── Class.js           # Class schema
│   └── ResetRequest.js    # Password reset schema
├── routes/
│   ├── auth.js            # Authentication routes
│   ├── users.js           # User routes
│   ├── marks.js           # Marks routes
│   └── classes.js         # Class routes
├── utils/
│   └── seedAdmin.js       # Default admin creation
└── server.js              # Main server file
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Git

### Environment Setup

1. **Clone and Install**
```bash
cd backend
npm install
```

2. **Environment Variables**
Create `.env` file:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/jpea_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Frontend Configuration
FRONTEND_URL=https://jpeducationacademy.in

# Admin Configuration
ADMIN_WHATSAPP=+919450378136
ADMIN_PHONE=9450378136
```

3. **Start Development Server**
```bash
npm run dev
```

## 🔐 Authentication System

### User Roles

#### 👨‍💼 Admin
- Add/Edit/Delete Teachers and Students
- View dashboard statistics
- Handle password reset requests
- Manage all system data
- Bulk import/export users

#### 👨‍🏫 Teacher
- View assigned classes and subjects
- Enter marks for assigned subjects
- Class Teachers can:
  - Edit student profiles
  - Manage fee status
  - Access all class data

#### 🎓 Student
- View own profile and marks
- Access academic info only if fee is paid
- Request password reset through admin
- WhatsApp contact for support

### Authentication Flow
1. **Login**: POST `/api/auth/login` with mobile + password
2. **Token**: Receive JWT token for subsequent requests
3. **Authorization**: Include `Authorization: Bearer <token>` header

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/login              # User login
POST   /api/auth/register           # Register user (Admin only)
GET    /api/auth/profile            # Get current user profile
PUT    /api/auth/profile            # Update profile
PUT    /api/auth/change-password    # Change password
POST   /api/auth/request-reset      # Request password reset
GET    /api/auth/reset-requests     # Get reset requests (Admin)
PUT    /api/auth/reset-requests/:id # Process reset request (Admin)
```

### User Management
```
GET    /api/users                  # Get all users with filters
GET    /api/users/:id              # Get user by ID
PUT    /api/users/:id              # Update user
DELETE /api/users/:id              # Delete user (Admin only)
PUT    /api/users/:id/fee-status   # Update fee status
GET    /api/users/stats            # Dashboard statistics (Admin)
POST   /api/users/bulk-import      # Bulk import users (Admin)
```

### Marks Management
```
GET    /api/marks/student/:id      # Get student marks
GET    /api/marks/class/:class/:section # Get class marks
POST   /api/marks                  # Enter marks
POST   /api/marks/bulk             # Bulk enter marks
DELETE /api/marks/:id              # Delete marks
GET    /api/marks/stats            # Marks statistics (Admin)
```

### Class Management
```
GET    /api/classes                # Get all classes
GET    /api/classes/:id            # Get class by ID
POST   /api/classes                # Create class (Admin)
PUT    /api/classes/:id            # Update class (Admin)
DELETE /api/classes/:id            # Delete class (Admin)
```

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  mobile: String (unique),
  email: String,
  password: String (hashed),
  role: ['admin', 'teacher', 'student'],
  class: String,
  section: String,
  subjects: [String],
  assignedClasses: [Object],
  isClassTeacher: Boolean,
  feeStatus: ['Paid', 'Pending', 'Partial'],
  isActive: Boolean,
  // ... more fields
}
```

### Mark Model
```javascript
{
  student: ObjectId,
  class: String,
  section: String,
  subject: String,
  examType: String,
  maxMarks: Number,
  obtainedMarks: Number,
  grade: String,
  isAbsent: Boolean,
  enteredBy: ObjectId,
  // ... more fields
}
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based auth
- **Password Hashing**: bcrypt with salt rounds
- **Rate Limiting**: Prevent API abuse
- **Input Validation**: Comprehensive validation
- **CORS Protection**: Secure cross-origin requests
- **Helmet Security**: Security headers
- **Role-based Access**: Granular permissions

## 📊 Default Admin Account

The system automatically creates a default admin account:

- **Mobile**: 9450378136
- **Password**: admin123
- **Role**: Admin

⚠️ **Important**: Change the default password after first login!

## 🚀 Deployment

### Render Deployment
1. Connect GitHub repository
2. Set environment variables
3. Deploy with build command: `npm install`
4. Start command: `npm start`

### Environment Variables for Production
```env
NODE_ENV=production
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_production_jwt_secret
FRONTEND_URL=https://jpeducationacademy.in
```

## 📈 Monitoring & Health

- **Health Check**: GET `/health`
- **API Documentation**: GET `/api/docs`
- **Error Logging**: Comprehensive error tracking
- **Performance Monitoring**: Request/response logging

## 🤝 API Usage Examples

### Login
```javascript
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    mobile: '9450378136',
    password: 'admin123'
  })
});
```

### Get Student Marks
```javascript
const response = await fetch('/api/marks/student/studentId', {
  headers: { 'Authorization': `Bearer ${token}` }
});
```

### Enter Marks
```javascript
const response = await fetch('/api/marks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    student: 'studentId',
    class: '10',
    section: 'A',
    subject: 'Mathematics',
    examType: 'Mid Term',
    maxMarks: 100,
    obtainedMarks: 85
  })
});
```

## 🛠️ Development

### Available Scripts
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm test           # Run tests (to be implemented)
```

### Code Structure
- **Controllers**: Business logic
- **Models**: Database schemas
- **Middleware**: Authentication, validation, error handling
- **Routes**: API endpoint definitions
- **Config**: Centralized configuration

## 📞 Support

For technical support or questions:
- **WhatsApp**: +91 94503 78136
- **Email**: jpeducationacademyghj@gmail.com
- **Phone**: +91 94503 78136

---

**JP Education Academy Backend API v1.0.0**  
Built with ❤️ for educational excellence