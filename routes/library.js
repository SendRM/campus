const library = require('express').Router();

library.get('/', require('./actions/library/sort'));
library.get('/search/:keyword', require('./actions/library/search'));
library.get('/book/:id', require('./actions/library/book'));

module.exports = library;