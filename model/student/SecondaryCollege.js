const mongoose = require('mongoose');
const { Schema } = mongoose;

const SecondaryCollegeSchema = new Schema({
  collegeName: {
    type: String,
    required: true,
    unique: true
  }
})

const SecondaryCollege = mongoose.model('SecondaryCollege', SecondaryCollegeSchema);

module.exports = { SecondaryCollege }