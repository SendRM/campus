const { Leave, validateLeave } = require('../../../model/student/Leave');
const validate = require('../../../util/validate');
const formidableConfig = require('../../../util/formidableConfig');
const handleImagesArr = require('../../../util/handleImagesArr');

module.exports = (req, res) => {
  if (req.body.annex) {
    if (validate(validateLeave, req.body, res)) return;
    Leave.create(req.body);
    return res.status(200).send({ message: 'ok' })
  }
  const form = formidableConfig('leaveImg');
  form.parse(req, (err, fields, files) => {
    validate(validateLeave, fields, res)
    let imgArr = handleImagesArr(files.img);
    Leave.create({
      applicationTime: fields.applicantTime,
      applicant: fields.applicant,
      sno: fields.sno,
      contactNumber: fields.contactNumber,
      college: fields.college,
      major: fields.major,
      grade: fields.grade,
      class: fields.class,
      annex: imgArr,
      startTime: fields.startTime,
      endTime: fields.endTime,
      leaveDays: fields.leaveDays,
      leaveType: fields.leaveType,
      leaveReason: fields.leaveReason
    })
    res.status(200).send({ message: 'ok' })
  })
}
