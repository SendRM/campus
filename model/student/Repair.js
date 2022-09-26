const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const RepairSchema = new Schema({
  sno: String,
  location: {
    type: String,
    maxlength: 10,
    required: true
  },
  repairRoom: {
    type: String,
    maxlength: 6,
    required: true
  },
  contactName: {
    type: String,
    minlength: 2,
    maxlength: 10,
    required: true
  },
  telephone: {
    type: String,
    minlength: 11,
    maxlength: 11,
    required: true
  },
  appointmentTime: {
    type: String,
    maxlength: 8,
    required: true
  },
  repairContent: {
    type: String,
    maxlength: 50,
    required: true
  },
  relatedPicture: {
    type: Array,
    default: null
  }
})

const Repair = mongoose.model('Repair', RepairSchema);

const validateRepair = repair => {
  const regtel = /^1[3|4|5|7|8]\d{9}$/;
  const schema = Joi.object({
    location: Joi.string().required().max(10).error(new Error('请输入十字以内的地点')),
    repairRoom: Joi.string().required().max(6).error(new Error('请输入六字以内的房间号')),
    contactName: Joi.string().required().min(2).max(10).error(new Error('请输入正确的姓名')),
    telephone: Joi.string().required().regex(regtel).error(new Error('电话格式错误')),
    appointmentTime: Joi.string().required().max(8).error(new Error('预约时间不得超过八字')),
    repairContent: Joi.string().required().max(50).error(new Error('报修原因限制为五十字'))
  })
  return schema.validate(repair, {
    abortEarly: false,
    allowUnknown: true
  });
}

module.exports = { Repair, validateRepair }