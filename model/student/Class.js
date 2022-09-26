const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClassSchema = new Schema({
  ClassName: {
    type: String,
    required: true,
    unique: true
  },
  belongMajor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Major'
  }
})

const Class = mongoose.model('Class', ClassSchema);

module.exports = { Class }