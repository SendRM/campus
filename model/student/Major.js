const mongoose = require('mongoose');
const { Schema } = mongoose;

const MajorSchema = new Schema({
  MajorName: {
    type: String,
    required: true,
    unique: true
  },
  belongCollege: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SecondaryCollege'
  }
})

const Major = mongoose.model('Major', MajorSchema);

module.exports = { Major }