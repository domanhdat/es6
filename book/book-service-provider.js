'use strict';

const BookRepository = require('./book-repository');

module.exports = function (request, response, next) {
    let bookCollection = request.app.get('mongodb').collection('books');
    let bookRepository = new BookRepository(bookCollection);
    request.app.set('book.repository', bookRepository);
    next();
};