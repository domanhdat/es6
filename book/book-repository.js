'use strict';

const ObjectId = require('mongodb').ObjectId;

class BookRepository {
    constructor(bookCollection) {
        this.bookCollection = bookCollection;
    }

    getAll() {
        return this.bookCollection.find({}).toArray();
    }

    findById(id) {
        return this.bookCollection.find({_id: ObjectId(id)}).next();
    }

    insert(book) {
            book._id = undefined;
            return this.bookCollection.insertOne(book);
    }

    update(book) {
        var bookId = book._id;
        delete book._id;
        return this.bookCollection.updateOne({_id: ObjectId(bookId)}, {$set: book});
    }

    deleteById(id) {
        return this.bookCollection.deleteOne({_id: ObjectId(id)});
    }
}

module.exports = BookRepository;
