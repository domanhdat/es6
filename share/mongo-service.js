var mongodb = require('mongodb');

module.exports = (request, response, next) =>
    mongodb.MongoClient.connect('mongodb://localhost:27017/books', function (error, connection) {
        if (error) {
            return next(error)
        }
        request.app.set('mongodb', connection);
        next();
    })
;
