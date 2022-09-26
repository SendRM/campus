const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

require('./model/connect')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

require('./routes')(app);

app.listen(80, () => console.log('服务器启动成功'));