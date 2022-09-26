const mongoose = require('mongoose');
const { Schema } = mongoose;
const Joi = require('joi');

const LeaveSchema = new Schema({
  applicationTime: String,
  applicant: String,
  sno: String,
  contactNumber: {
    type: String,
    minlength: 11,
    maxlength: 11,
    required: true
  },
  college: String,
  major: String,
  grade: String,
  class: String,
  annex: {
    type: Array,
    default: []
  },
  startTime: String,
  endTime: String,
  leaveDays: {
    type: String,
    required: true
  },
  leaveType: {
    type: String,
    enum: ['事假', '病假'],
    required: true
  },
  leaveReason: {
    type: String,
    default: null
  }
})

const Leave = mongoose.model('Leave', LeaveSchema);

const validateLeave = leave => {
  const regtel = /^1[3|4|5|7|8]\d{9}$/;
  const regType = /^['事假'|'病假']{2}$/;
  const schema = Joi.object({
    contactNumber: Joi.string().required().regex(regtel).error(new Error('联系电话格式错误')),
    leaveDays: Joi.string().required().error(new Error('请假天数格式错误')),
    leaveType: Joi.string().regex(regType).required().error(new Error('请假类型有误'))
  })
  return schema.validate(leave, {
    abortEarly: false,
    allowUnknown: true
  });
}

module.exports = { Leave, validateLeave }