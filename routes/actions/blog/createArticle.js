const { Article, validateArticle } = require('../../../model/blog/Article');
const validate = require('../../../util/validate');
const formidableConfig = require('../../../util/formidableConfig');
const handleImagesArr = require('../../../util/handleImagesArr');
const modifyUser = require('../../../util/modifyUser');

module.exports = async (req, res) => {
  if (req.body.relatedPictures) {
    if (validate(validateArticle, req.body, res)) return;
    let article = await Article.create(req.body);
    await modifyUser(req.body.author, article._id, 'dynamicArticle', 'add')
    return res.status(200).send({ message: 'ok' })
  }

  const form = formidableConfig('articleImg');
  form.parse(req, (err, fields, files) => {
    validate(validateArticle, fields, res);
    let imgArr = handleImagesArr(files.img);
    Article.create({
      author: fields.author,
      content: fields.content,
      type: fields.type,
      relatedPictures: imgArr
    }).then(article => {
      modifyUser(fields.author, article._id, 'dynamicArticle', 'add');
    })
    res.status(200).send({ message: 'ok', });
  })
}