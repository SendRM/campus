const { Book } = require('../../../model/library/Book');
const find = require('../../../util/find');

module.exports = async (req, res) => {
  let bookArr = getItem(await find(Book, 'bookName', req.params.keyword, res, true))
  bookArr = bookArr.concat(getItem(await find(Book, 'author', req.params.keyword, res, true)))
  res.status(200).send({ bookArr });
}

function getItem(arr) {
  let resArr = [];
  if (arr.length) {
    arr.forEach(item => {
      resArr.push(item)
    });
  }
  return resArr;
}