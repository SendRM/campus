const { Article } = require('../../../model/blog/Article');
const modifyUser = require('../../../util/modifyUser');

module.exports = async (req, res) => {
  let _id = req.params.id;
  let article = await Article.findById(_id).populate('author');
  let user_id = article.author._id;

  if (article.author.info.likesArticle.length === 0) {
    article.meta.likes = article.meta.likes + 1;
    await article.save();
    modifyUser(user_id, _id, 'likesArticle', 'add')
    return res.status(200).send({ status: true });
  }

  article.author.info.likesArticle.forEach((item, index) => {
    if (item == _id) return;
  });

  modifyUser(user_id, _id, 'likesArticle', 'add')
  article.meta.likes = article.meta.likes + 1;
  await article.save();
  res.status(200).send({ status: true });
}