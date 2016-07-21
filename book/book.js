'use strict';

class Book {

    constructor() {
        this.attribute = {};
    }

    setId(id) {
        this.attribute._id = id;
        return this;
    }

    getId() {
        return this.attribute._id;
    }

    setName(name) {
        this.attribute.name = name;
        return this;
    }

    getName() {
        return this.attribute.name;
    }

    setAuthor(author) {
        this.attribute.author = author;
        return this;
    }

    getAuth() {
        return this.attribute.author;
    }
}

module.exports = Book;
