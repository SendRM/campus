const { User } = require('../../../model/blog/User');
const { Student } = require('../../../model/student/Student');

module.exports = async (req, res) => {
  let stu = await Student.findOne({ sno: req.params.sno });
  User.findOne({ sno: stu._id }).then(user => {
    res.status(200).send({ user });
  })
}