const { Article } = require('../../../model/blog/Article');
const { Comment } = require('../../../model/blog/Comment');
const modifyUser = require('../../../util/modifyUser');

module.exports = async (req, res) => {
  await Comment.create(req.body);
  await modifyUser(req.body.author, req.body.article, 'commentArticle', 'add');
  let article = await Article.findById(req.body.article);
  article.meta.comments = article.meta.comments + 1;
  await article.save();
  return res.status(200).send({ message: 'ok' });
}