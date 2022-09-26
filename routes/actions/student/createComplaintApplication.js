const { Complaint, validateComplaint } = require('../../../model/student/Complaint');
const validate = require('../../../util/validate');
const formidableConfig = require('../../../util/formidableConfig');
const handleImagesArr = require('../../../util/handleImagesArr');

module.exports = (req, res) => {
  if (req.body.relatedPictures) {
    if (validate(validateComplaint, req.body, res)) return;
    Complaint.create(req.body);
    return res.status(200).send({ message: 'ok' })
  }
  const form = formidableConfig('complaintImg');
  form.parse(req, (err, fields, files) => {
    validate(validateComplaint, fields, res);
    let imgArr = handleImagesArr(files.img);
    Complaint.create({
      sno: fields.sno,
      complaintType: fields.complaintType,
      complaintCanteen: fields.complaintCanteen,
      telephone: fields.telephone,
      complaintContent: fields.complaintContent,
      relatedPictures: imgArr
    });
    res.status(200).send({ message: 'ok' });
  })
}