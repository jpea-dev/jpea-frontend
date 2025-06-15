const mongoose = require('mongoose');

const resetRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required']
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number']
  },
  reason: {
    type: String,
    required: [true, 'Reason for password reset is required'],
    maxlength: [500, 'Reason cannot exceed 500 characters']
  },
  requestType: {
    type: String,
    enum: ['forgot_password', 'account_locked', 'security_concern', 'other'],
    default: 'forgot_password'
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'completed'],
    default: 'pending'
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  processedAt: Date,
  processedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  adminNotes: {
    type: String,
    maxlength: [1000, 'Admin notes cannot exceed 1000 characters']
  },
  newPassword: {
    type: String,
    select: false
  },
  ipAddress: String,
  userAgent: String,
  
  // Contact Information
  alternateContact: String,
  parentContact: String,
  
  // Verification
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: String,
  verificationExpires: Date,
  
  // Auto-expire requests after 7 days
  expiresAt: {
    type: Date,
    default: Date.now,
    expires: 604800 // 7 days in seconds
  }
}, {
  timestamps: true
});

// Indexes
resetRequestSchema.index({ user: 1, status: 1 });
resetRequestSchema.index({ mobile: 1 });
resetRequestSchema.index({ status: 1, requestedAt: -1 });
resetRequestSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

// Static method to get pending requests
resetRequestSchema.statics.getPendingRequests = function() {
  return this.find({ status: 'pending' })
    .populate('user', 'name mobile role class section')
    .sort({ requestedAt: -1 });
};

// Static method to get user's recent requests
resetRequestSchema.statics.getUserRecentRequests = function(userId, days = 30) {
  const dateLimit = new Date();
  dateLimit.setDate(dateLimit.getDate() - days);
  
  return this.find({
    user: userId,
    requestedAt: { $gte: dateLimit }
  }).sort({ requestedAt: -1 });
};

// Method to mark as processed
resetRequestSchema.methods.markAsProcessed = function(adminId, status, notes) {
  this.status = status;
  this.processedBy = adminId;
  this.processedAt = new Date();
  this.adminNotes = notes;
  return this.save();
};

module.exports = mongoose.model('ResetRequest', resetRequestSchema);