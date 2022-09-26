const mongoose = require('mongoose');
const { Schema } = mongoose;
const create = require('../../util/encryption');
const Class = require('./Class')

const StudentSchema = new Schema({
  sno: {
    type: String,
    minlength: 11,
    maxlength: 11,
    required: true,
    unique: true
  },
  id: {
    type: String,
    minlength: 18,
    maxlength: 18,
    required: true,
    unique: true
  },
  pwd: {
    type: String,
    required: true
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 10,
    required: true
  },
  gender: {
    type: Number,
    default: 0,
    enum: [0, 1],
    default: 0,
    required: true
  },
  grade: {
    type: Number,
    required: true
  },
  belongClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  }
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = { Student }