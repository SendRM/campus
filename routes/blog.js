const blog = require('express').Router();

// 用户
blog.get('/user/:sno', require('./actions/blog/getUser'));
blog.post('/user/avatar', require('./actions/blog/avatar'));
blog.put('/user/nickname', require('./actions/blog/nickname'));

// 动态
// 获取全部动态
blog.get('/', require('./actions/blog/findArticle'));

// 动态详情
blog.get('/:id', require('./actions/blog/getArticle'));
// 动态搜索
blog.get('/search/:keyword', require('./actions/blog/search'));

// 动态博客
blog.post('/', require('./actions/blog/createArticle'));

// 点赞动态
blog.put('/likes/:id', require('./actions/blog/addLike'));
// 取消赞
blog.delete('/likes/:id', require('./actions/blog/cancelLike'));
// 评论动态
blog.post('/comment', require('./actions/blog/addComment'));


module.exports = blog;
