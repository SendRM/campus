const { Article } = require('../../../model/blog/Article');

module.exports = async (req, res) => {
  // find(Article, 'content', req.params.keyword, res, true);
  let articles = await Article.find({ content: { $regex: req.params.keyword } }).populate({
    path: 'author',
    populate: {
      path: 'sno',
      populate: { path: 'belongClass', populate: { path: 'belongMajor', populate: 'belongCollege' } }
    }
  });
  res.status(200).send({ articles });
}