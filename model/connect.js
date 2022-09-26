const mongoose = require('mongoose');
const config = require('config');

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.log(err));
