const { Repair, validateRepair } = require('../../../model/student/Repair');
const validate = require('../../../util/validate');
const formidableConfig = require('../../../util/formidableConfig');
const handleImagesArr = require('../../../util/handleImagesArr');

module.exports = (req, res) => {
  if (req.body.relatedPictures) {
    if (validate(validateRepair, req.body, res)) return;
    Repair.create(req.body);
    return res.status(200).send({ message: 'ok' })
  }
  const form = formidableConfig('repairImg');
  form.parse(req, (err, fields, files) => {
    validate(validateRepair, fields, res);
    let imgArr = handleImagesArr(files.img);
    Repair.create({
      sno: fields.sno,
      location: fields.location,
      repairRoom: fields.repairRoom,
      contactName: fields.contactName,
      telephone: fields.telephone,
      appointmentTime: fields.appointmentTime,
      repairContent: fields.repairContent,
      relatedPicture: imgArr
    });
    res.status(200).send({ message: 'ok' });
  })
}