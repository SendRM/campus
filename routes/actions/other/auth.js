const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async (req, res) => {
  let token = req.body.token;
  if (token) {
    jwt.verify(token, config.get('db.jwtSecret'), (err, decode) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ error: '认证码失效，请重新登录！', errorCode: 1003 })
        } else {
          return res.status(401).json({ error: '认证失败！', errorCode: 1002 })
        }
      } else {
        return res.status(200).json({ message: '已登录' })
      }
    })
  } else {
    return res.status(403).json({ error: '请提供认证码', errorCode: 1001 });
  }
}