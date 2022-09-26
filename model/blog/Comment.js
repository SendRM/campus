const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  author: {
    type: String,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
    required: true
  },
  createAt: {
    type: String,
    default: new Date().toLocaleString()
  }
}, { versionKey: false });

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = { Comment }
