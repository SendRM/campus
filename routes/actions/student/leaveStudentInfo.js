const { Student } = require('../../../model/student/Student');
require('../../../model/student/Class');
require('../../../model/student/Major');
require('../../../model/student/SecondaryCollege');

module.exports = async (req, res) => {
  let sno = req.params.sno;
  await Student.findOne({ sno }).populate({
    path: 'belongClass',
    populate: { path: 'belongMajor', populate: { path: 'belongCollege' } }
  }).exec(function (err, result) {
    let { gender, sno, name, grade, belongClass } = result;
    let student = {
      gender,
      sno,
      applicant: name,
      grade,
      class: belongClass.ClassName,
      major: belongClass.belongMajor.MajorName,
      college: belongClass.belongMajor.belongCollege.collegeName
    }
    return res.status(200).json(student);
  });
}