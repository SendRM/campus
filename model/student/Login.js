const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoginSchema = new Schema({
  openId: {
    type: String,
    required: true
  },
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  account: {
    type: Number,
  },
  pwd: {
    type: String
  }
})

const Login = mongoose.model('Login', LoginSchema);

module.exports = { Login }