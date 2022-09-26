const { Article } = require('../../../model/blog/Article');
const modifyUser = require('../../../util/modifyUser');

module.exports = async (req, res) => {
  let _id = req.params.id;
  let article = await Article.findById(_id).populate('author');
  let user_id = article.author._id;
  article.meta.likes = article.meta.likes - 1;
  modifyUser(user_id, _id, 'likesArticle', 'delete')
  await article.save();
  res.status(200).send({ article });
}