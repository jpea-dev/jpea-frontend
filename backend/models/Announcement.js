const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    maxlength: [2000, 'Content cannot exceed 2000 characters']
  },
  type: {
    type: String,
    enum: ['general', 'academic', 'event', 'holiday', 'exam', 'fee', 'urgent'],
    default: 'general'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  
  // Target Audience
  targetAudience: {
    roles: [{
      type: String,
      enum: ['admin', 'teacher', 'student', 'all'],
      default: 'all'
    }],
    classes: [String], // Specific classes if needed
    sections: [String] // Specific sections if needed
  },
  
  // Visibility
  isPublished: {
    type: Boolean,
    default: false
  },
  publishDate: {
    type: Date,
    default: Date.now
  },
  expiryDate: Date,
  
  // Attachments
  attachments: [{
    filename: String,
    originalName: String,
    mimetype: String,
    size: Number,
    url: String
  }],
  
  // Author
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Read Status
  readBy: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    readAt: {
      type: Date,
      default: Date.now
    }
  }],
  
  // Status
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes
announcementSchema.index({ type: 1, priority: 1 });
announcementSchema.index({ isPublished: 1, publishDate: -1 });
announcementSchema.index({ expiryDate: 1 });
announcementSchema.index({ 'targetAudience.roles': 1 });
announcementSchema.index({ createdBy: 1 });

// Virtual for read count
announcementSchema.virtual('readCount').get(function() {
  return this.readBy ? this.readBy.length : 0;
});

// Method to mark as read by user
announcementSchema.methods.markAsRead = function(userId) {
  const alreadyRead = this.readBy.some(read => read.user.equals(userId));
  
  if (!alreadyRead) {
    this.readBy.push({ user: userId });
    return this.save();
  }
  
  return Promise.resolve(this);
};

// Static method to get active announcements for user
announcementSchema.statics.getForUser = function(userRole, userClass, userSection) {
  const now = new Date();
  
  const query = {
    isPublished: true,
    isActive: true,
    publishDate: { $lte: now },
    $or: [
      { expiryDate: { $exists: false } },
      { expiryDate: null },
      { expiryDate: { $gte: now } }
    ],
    $or: [
      { 'targetAudience.roles': 'all' },
      { 'targetAudience.roles': userRole }
    ]
  };
  
  // Add class/section filter if specified
  if (userClass) {
    query.$and = query.$and || [];
    query.$and.push({
      $or: [
        { 'targetAudience.classes': { $size: 0 } },
        { 'targetAudience.classes': userClass }
      ]
    });
  }
  
  return this.find(query)
    .populate('createdBy', 'name role')
    .sort({ priority: -1, publishDate: -1 });
};

module.exports = mongoose.model('Announcement', announcementSchema);