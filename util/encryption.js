const bcrypt = require('bcrypt-nodejs');

module.exports = async function create(table, obj) {
  let hash = bcrypt.hashSync(obj.pwd);
  obj.pwd = hash;
  await table.create(obj);
}