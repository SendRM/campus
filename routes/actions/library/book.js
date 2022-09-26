const { Book } = require('../../../model/library/Book');

module.exports = async (req, res) => {
  let book = await Book.findById(req.params.id);
  book.browsingHistory = book.browsingHistory + 1;
  await book.save();
  res.status(200).send({ book })
}
