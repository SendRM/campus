const mongoose = require('mongoose');
const { Schema } = mongoose;
const Joi = require('joi');

const ArticleSchema = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createAt: {
    type: String,
    default: new Date().toLocaleString()
  },
  content: {
    type: String,
    minlength: 1,
    maxlength: 200
  },
  relatedPictures: {
    type: Array,
    default: null
  },
  type: {
    type: String,
    default: '全部'
  },
  meta: {
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 }
  }
}, { versionKey: false });

const Article = mongoose.model('Article', ArticleSchema);

const validateArticle = article => {
  const schema = Joi.object({
    content: Joi.string().min(1).max(200).required().error(new Error('输入的字符数量有误'))
  })
  return schema.validate(article, {
    abortEarly: false,
    allowUnknown: true
  });
}

module.exports = {
  Article,
  validateArticle
}