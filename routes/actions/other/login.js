const { Student } = require('../../../model/student/Student');
const { Login } = require('../../../model/student/Login');
const { User } = require('../../../model/blog/User');
const bcrypt = require('bcrypt-nodejs');
const config = require('config');
const axios = require('axios');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  let { sno, pwd, code, nickName, avatarUrl } = req.body;
  let student = await Student.findOne({ sno });

  if (student == null) {
    return res.json({
      error: '学号或密码错误'
    })
  }
  let isValid = bcrypt.compareSync(pwd, student.pwd);
  if (!isValid) {
    return res.json({
      error: '学号或密码错误'
    })
  }
  const querystring = `appid=${config.get('miniProgram.appId')}&secret=${config.get('miniProgram.appSecret')}&js_code=${code}`;
  const wxAPI = `https://api.weixin.qq.com/sns/jscode2session?${querystring}`;
  axios.get(wxAPI)
    .then(response => {
      const openId = response.data.openid;
      Login.findOne({ openId }, async (err, login) => {
        if (login) {
          let user = await User.findById(login.uid);
          return res.json({
            token: generateToken({ openId }),
            user: user._id
          });
        }

        let user = await User.create({ nickName, avatarUrl, sno: student._id });
        await Login.create({
          openId,
          uid: user._id,
          account: student.sno,
          pwd: student.pwd
        });
        return res.json({
          token: generateToken({ openId }),
          user: user._id
        })
      })
    })

  let generateToken = function (login) {
    return jwt.sign(login, config.get('db.jwtSecret'), { expiresIn: '7 days' })
  }
}