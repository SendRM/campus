const { Complaint } = require('../../../model/student/Complaint');
const find = require('../../../util/find');
module.exports = (req, res) => {
  find(Complaint,'sno', req.params.sno, res);
}