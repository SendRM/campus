const mongoose = require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
  weekly: {
    type: Number,
    required: true
  },
  week: {
    type: Number,
    min: 1,
    max: 20,
    required: true
  },
  class: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  belongClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }
})

const Course = mongoose.model('Course', CourseSchema);

module.exports = { Course }