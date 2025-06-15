const mongoose = require('mongoose');
const config = require('../config/config');

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: [true, 'Class name is required'],
    enum: config.ACADEMIC.CLASSES
  },
  section: {
    type: String,
    required: [true, 'Section is required'],
    uppercase: true,
    trim: true
  },
  academicSession: {
    type: String,
    required: [true, 'Academic session is required'],
    default: config.ACADEMIC.CURRENT_SESSION
  },
  
  // Class Teacher
  classTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  // Subject Teachers
  subjectTeachers: [{
    subject: {
      type: String,
      required: true
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  }],
  
  // Students
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  // Class Information
  maxStrength: {
    type: Number,
    default: 40
  },
  currentStrength: {
    type: Number,
    default: 0
  },
  
  // Stream (for classes 11 and 12)
  stream: {
    type: String,
    enum: config.ACADEMIC.STREAMS
  },
  
  // Subjects for this class
  subjects: [{
    type: String,
    required: true
  }],
  
  // Class Schedule
  schedule: [{
    day: {
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    periods: [{
      period: Number,
      subject: String,
      teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      startTime: String,
      endTime: String
    }]
  }],
  
  // Status
  isActive: {
    type: Boolean,
    default: true
  },
  
  // Metadata
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  remarks: String
}, {
  timestamps: true
});

// Compound index for unique class-section combination
classSchema.index({ className: 1, section: 1, academicSession: 1 }, { unique: true });
classSchema.index({ classTeacher: 1 });
classSchema.index({ 'subjectTeachers.teacher': 1 });

// Virtual for class display name
classSchema.virtual('displayName').get(function() {
  return `${this.className}-${this.section}`;
});

// Pre-save middleware to update current strength
classSchema.pre('save', function(next) {
  if (this.students) {
    this.currentStrength = this.students.length;
  }
  next();
});

// Method to add student
classSchema.methods.addStudent = function(studentId) {
  if (!this.students.includes(studentId)) {
    this.students.push(studentId);
    this.currentStrength = this.students.length;
  }
  return this.save();
};

// Method to remove student
classSchema.methods.removeStudent = function(studentId) {
  this.students = this.students.filter(id => !id.equals(studentId));
  this.currentStrength = this.students.length;
  return this.save();
};

// Method to assign subject teacher
classSchema.methods.assignSubjectTeacher = function(subject, teacherId) {
  const existingIndex = this.subjectTeachers.findIndex(st => st.subject === subject);
  
  if (existingIndex >= 0) {
    this.subjectTeachers[existingIndex].teacher = teacherId;
  } else {
    this.subjectTeachers.push({ subject, teacher: teacherId });
  }
  
  return this.save();
};

// Static method to get teacher's classes
classSchema.statics.getTeacherClasses = function(teacherId) {
  return this.find({
    $or: [
      { classTeacher: teacherId },
      { 'subjectTeachers.teacher': teacherId }
    ],
    isActive: true
  }).populate('classTeacher', 'name')
    .populate('subjectTeachers.teacher', 'name');
};

module.exports = mongoose.model('Class', classSchema);