const { User } = require('../../../model/blog/User');
const { Student } = require('../../../model/student/Student');

module.exports = async (req, res) => {
  let { sno, nickName } = req.body;
  let stu = await Student.findOne({ sno: sno })
  sno = stu._id;
  await User.updateOne({ sno }, { nickName });
  let user = await User.findOne({ sno });
  res.status(200).send({ user });
}