const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
  sno: String,
  complaintType: {
    type: String,
    required: true
  },
  complaintCanteen: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true,
    minlength: 11,
    maxlength: 11,
  },
  complaintContent: {
    type: String,
    required: true,
    maxlength: 100
  },
  relatedPictures: {
    type: Array,
    default: null
  }
})

const Complaint = mongoose.model('Complaint', ComplaintSchema);

const validateComplaint = complaint => {
  const regtel = /^1[3|4|5|7|8]\d{9}$/;
  const schema = Joi.object({
    telephone: Joi.string().regex(regtel).required().error(new Error('电话格式错误')),
    complaintContent: Joi.string().required().max(100).error(new Error('投诉内容限制为一百字'))
  })
  return schema.validate(complaint, {
    abortEarly: false,
    allowUnknown: true
  });
}

module.exports = { Complaint, validateComplaint }