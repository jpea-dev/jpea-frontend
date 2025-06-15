const mongoose = require('mongoose');
const config = require('../config/config');

const markSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Student reference is required']
  },
  class: {
    type: String,
    required: [true, 'Class is required'],
    enum: config.ACADEMIC.CLASSES
  },
  section: {
    type: String,
    required: [true, 'Section is required']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required']
  },
  academicSession: {
    type: String,
    required: [true, 'Academic session is required'],
    default: config.ACADEMIC.CURRENT_SESSION
  },
  
  // Exam Types
  examType: {
    type: String,
    enum: ['Unit Test 1', 'Unit Test 2', 'Mid Term', 'Final Term', 'Annual', 'Practical'],
    required: [true, 'Exam type is required']
  },
  
  // Marks Information
  maxMarks: {
    type: Number,
    required: [true, 'Maximum marks is required'],
    min: [1, 'Maximum marks must be at least 1']
  },
  obtainedMarks: {
    type: Number,
    required: [true, 'Obtained marks is required'],
    min: [0, 'Obtained marks cannot be negative']
  },
  
  // Additional Information
  grade: String,
  remarks: String,
  isAbsent: {
    type: Boolean,
    default: false
  },
  
  // Teacher Information
  enteredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Teacher reference is required']
  },
  enteredAt: {
    type: Date,
    default: Date.now
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  lastModifiedAt: Date,
  
  // Status
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
markSchema.index({ student: 1, academicSession: 1 });
markSchema.index({ class: 1, section: 1, subject: 1 });
markSchema.index({ examType: 1, academicSession: 1 });
markSchema.index({ enteredBy: 1 });

// Virtual for percentage
markSchema.virtual('percentage').get(function() {
  if (this.isAbsent) return 0;
  return ((this.obtainedMarks / this.maxMarks) * 100).toFixed(2);
});

// Virtual for pass/fail status
markSchema.virtual('isPassed').get(function() {
  if (this.isAbsent) return false;
  const percentage = (this.obtainedMarks / this.maxMarks) * 100;
  return percentage >= 33; // 33% passing criteria
});

// Method to calculate grade
markSchema.methods.calculateGrade = function() {
  if (this.isAbsent) return 'AB';
  
  const percentage = (this.obtainedMarks / this.maxMarks) * 100;
  
  if (percentage >= 90) return 'A+';
  if (percentage >= 80) return 'A';
  if (percentage >= 70) return 'B+';
  if (percentage >= 60) return 'B';
  if (percentage >= 50) return 'C+';
  if (percentage >= 40) return 'C';
  if (percentage >= 33) return 'D';
  return 'F';
};

// Pre-save middleware to calculate grade
markSchema.pre('save', function(next) {
  this.grade = this.calculateGrade();
  
  if (this.isModified() && !this.isNew) {
    this.lastModifiedAt = new Date();
  }
  
  next();
});

// Static method to get student marks summary
markSchema.statics.getStudentSummary = async function(studentId, academicSession) {
  return await this.aggregate([
    {
      $match: {
        student: mongoose.Types.ObjectId(studentId),
        academicSession: academicSession,
        isActive: true
      }
    },
    {
      $group: {
        _id: {
          subject: '$subject',
          examType: '$examType'
        },
        totalMaxMarks: { $sum: '$maxMarks' },
        totalObtainedMarks: { $sum: '$obtainedMarks' },
        count: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: '$_id.subject',
        exams: {
          $push: {
            examType: '$_id.examType',
            maxMarks: '$totalMaxMarks',
            obtainedMarks: '$totalObtainedMarks',
            percentage: {
              $multiply: [
                { $divide: ['$totalObtainedMarks', '$totalMaxMarks'] },
                100
              ]
            }
          }
        },
        totalMaxMarks: { $sum: '$totalMaxMarks' },
        totalObtainedMarks: { $sum: '$totalObtainedMarks' }
      }
    },
    {
      $project: {
        subject: '$_id',
        exams: 1,
        totalMaxMarks: 1,
        totalObtainedMarks: 1,
        overallPercentage: {
          $multiply: [
            { $divide: ['$totalObtainedMarks', '$totalMaxMarks'] },
            100
          ]
        }
      }
    }
  ]);
};

module.exports = mongoose.model('Mark', markSchema);