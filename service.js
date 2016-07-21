var mongo       = require('./share/mongo-service');
var bookService = require('./book/book-service-provider');


module.exports = function (app) {
    app.use(mongo);
    app.use(bookService);
};