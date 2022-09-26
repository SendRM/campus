const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  nickName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10
  },
  avatarUrl: {
    type: String
  },
  sno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  info: {
    commentArticle: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    likesArticle: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
    dynamicArticle: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  },
})

const User = mongoose.model('User', UserSchema);

const validateUser = user => {
  const schema = Joi.object({
    nickName: Joi.string().required().min(1).max(10).error(new Error('请输入正确的昵称'))
  })
  return schema.validate(user, {
    abortEarly: false,
    allowUnknown: true
  });
}

module.exports = { User, validateUser }