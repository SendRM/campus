const { Repair } = require('../../../model/student/Repair');
const find = require('../../../util/find');
module.exports = (req, res) => {
  find(Repair, 'sno', req.params.sno, res);
}