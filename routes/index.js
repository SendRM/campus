module.exports = app => {
  app.use('/student', require('./student'));
  app.use('/library', require('./library'));
  app.use('/blog', require('./blog'));

  app.post('/login', require('./actions/other/login'));
  app.post('/auth', require('./actions/other/auth'));
}