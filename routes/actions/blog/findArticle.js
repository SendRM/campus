const { Article } = require('../../../model/blog/Article');
module.exports = async (req, res) => {
  let articles = await Article.find().sort('-createAt').populate({
    path: 'author',
    populate: {
      path: 'sno',
      populate: { path: 'belongClass', populate: { path: 'belongMajor', populate: 'belongCollege' } }
    }
  });
  articles.reverse();
  res.status(200).send({ articles });
}