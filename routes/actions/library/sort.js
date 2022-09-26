const { Book } = require('../../../model/library/Book');
module.exports = async (req, res) => {
  let randomBooks = getRandom(await Book.find(), 3);
  let topBooks = await Book.find().limit(3).sort('-browsingHistory');
  res.status(200).send({ randomBooks, topBooks })
}

function getRandom(arrList, num) {
  var tempArr = arrList.slice(0);
  var newArrList = [];
  for (var i = 0; i < num; i++) {
    var random = Math.floor(Math.random() * (tempArr.length - 1));
    var arr = tempArr[random];
    tempArr.splice(random, 1);
    newArrList.push(arr);
  }
  return newArrList;
}