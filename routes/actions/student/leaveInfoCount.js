const { Leave } = require('../../../model/student/Leave');
const find = require('../../../util/find');
module.exports = (req, res) => {
  find(Leave, 'sno', req.params.sno, res)
}