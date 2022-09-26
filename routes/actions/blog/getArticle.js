const { Article } = require('../../../model/blog/Article');
const { Comment } = require('../../../model/blog/Comment');

module.exports = async (req, res) => {
  let _id = req.params.id;
  let article = await Article.findById(_id).populate({
    path: 'author',
    populate: {
      path: 'sno',
      populate: { path: 'belongClass', populate: { path: 'belongMajor', populate: 'belongCollege' } }
    }
  });
  let comments = await Comment.find({ article: _id }).populate('author');
  res.status(200).send({ article, comments });
}