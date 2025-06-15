const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

const userSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    unique: true,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number']
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false
  },
  role: {
    type: String,
    enum: [config.ROLES.ADMIN, config.ROLES.TEACHER, config.ROLES.STUDENT],
    required: [true, 'Role is required']
  },
  
  // Profile Information
  dateOfBirth: Date,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other']
  },
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  parentMobile: {
    type: String,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number']
  },
  profileImage: String,
  
  // Academic Information (for Students and Teachers)
  class: {
    type: String,
    enum: config.ACADEMIC.CLASSES
  },
  section: String,
  rollNumber: String,
  admissionNumber: String,
  stream: {
    type: String,
    enum: config.ACADEMIC.STREAMS
  },
  academicSession: {
    type: String,
    default: config.ACADEMIC.CURRENT_SESSION
  },
  
  // Teacher Specific Fields
  employeeId: String,
  subjects: [{
    type: String
  }],
  assignedClasses: [{
    class: String,
    section: String,
    subject: String
  }],
  isClassTeacher: {
    type: Boolean,
    default: false
  },
  classTeacherOf: {
    class: String,
    section: String
  },
  qualification: String,
  experience: Number,
  joiningDate: Date,
  
  // Status Fields
  isActive: {
    type: Boolean,
    default: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  lastLogin: Date,
  
  // Fee Status (for Students)
  feeStatus: {
    type: String,
    enum: ['Paid', 'Pending', 'Partial'],
    default: 'Pending'
  },
  feeAmount: Number,
  feePaidAmount: Number,
  feeLastUpdated: Date,
  
  // Metadata
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
userSchema.index({ mobile: 1 });
userSchema.index({ role: 1 });
userSchema.index({ class: 1, section: 1 });
userSchema.index({ isActive: 1, isDeleted: 1 });
userSchema.index({ employeeId: 1 });
userSchema.index({ admissionNumber: 1 });

// Virtual for full name
userSchema.virtual('fullName').get(function() {
  return this.name;
});

// Virtual for fee balance
userSchema.virtual('feeBalance').get(function() {
  if (this.feeAmount && this.feePaidAmount) {
    return this.feeAmount - this.feePaidAmount;
  }
  return this.feeAmount || 0;
});

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to get public profile (without sensitive data)
userSchema.methods.getPublicProfile = function() {
  const userObject = this.toObject();
  delete userObject.password;
  delete userObject.__v;
  return userObject;
};

// Static method to find active users
userSchema.statics.findActive = function(filter = {}) {
  return this.find({ ...filter, isActive: true, isDeleted: false });
};

// Static method to find by role
userSchema.statics.findByRole = function(role, filter = {}) {
  return this.findActive({ ...filter, role });
};

// Pre-find middleware to exclude deleted users by default
userSchema.pre(/^find/, function(next) {
  if (!this.getQuery().includeDeleted) {
    this.find({ isDeleted: { $ne: true } });
  }
  next();
});

module.exports = mongoose.model('User', userSchema);