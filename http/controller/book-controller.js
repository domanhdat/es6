'use strict';

exports.getAll = (request, response, next) => {
    const bookRepository = request.app.get('book.repository');
    bookRepository.getAll()
        .then(books => response.render('index.nj.html', {books: books}))
        .catch(next)
    ;
};

exports.create = (request, response, next) => {
    const bookRepository = request.app.get('book.repository');
    const bookId         = request.params['id'];
    bookRepository.findById(bookId)
        .then(book => response.render('create.nj.html', {book: book} || {}))
        .catch(next)
};

exports.save = (request, response, next) => {
    const bookRepository = request.app.get('book.repository');
    const book           = request.body;
    let savingBook;
    if (book._id) {
        savingBook = bookRepository.update(book);
    } else {
        savingBook = bookRepository.insert(book);
    }
    savingBook
        .then(() => response.redirect('/'))
        .catch(next)
    ;
};

exports.delete = (request, response, next) => {
    const bookRepository = request.app.get('book.repository');
    const bookId         = request.params['id'];
    bookRepository.deleteById(bookId)
        .then(() => response.redirect('/'))
        .catch(next)
    ;
};
