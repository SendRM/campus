module.exports = async (database, key, data, res, next) => {
  let resultArr;
  await database.find({ [key]: {$regex: data} }).then(result => {
    if (next === undefined) return res.status(200).send(result);
    resultArr = result;
  })
  return resultArr;
}