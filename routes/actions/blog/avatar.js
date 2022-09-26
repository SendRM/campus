const { User } = require('../../../model/blog/User');
const { Student } = require('../../../model/student/Student');
const formidableConfig = require('../../../util/formidableConfig');

module.exports = async (req, res) => {
  const form = formidableConfig('userImg');
  form.parse(req, async (err, fields, files) => {
    let imgUrl = files.file.path.split('public')[1];
    let stu = await Student.findOne({ sno: fields.sno })
    fields.sno = stu._id;
    await User.updateOne({ sno: fields.sno }, { avatarUrl: imgUrl });
    let user = await User.findOne({ sno: fields.sno });
    res.status(200).send({ user });
  })
}