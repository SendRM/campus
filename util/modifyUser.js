const { User } = require('../model/blog/User');

module.exports = async (userId, articleId, type, operation) => {
  let user = await User.findById(userId);
  if (operation === 'add') {
    user.info[type].push(articleId)
    await user.save();
  }
  if (operation === 'delete') {
    user.info[type].forEach((item, index) => {
      if (item == articleId) user.info[type].splice(index, 1);
    });
    await user.save();
  }
}
