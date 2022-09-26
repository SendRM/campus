const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  author: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  callNumber: {
    type: String,
    required: true
  },
  bookStatus: {
    type: String,
    enum: ['可借', '不可借']
  },
  bookBorrowCount: {
    type: Number
  },
  briefIntroduction: {
    type: String
  },
  browsingHistory: {
    type: Number,
    default: 0
  },
  bookType: {
    type: String
  },
  bookImg: {
    type: String
  }
})

const Book = mongoose.model('Book', BookSchema);

module.exports = { Book }