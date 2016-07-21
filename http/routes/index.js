const express    = require('express');
const router     = express.Router();
const controller = require('./../controller');

/* GET home page. */
router.get('/', controller.BookController.getAll);

router.get('/book/edit', controller.BookController.create);

router.get('/book/edit/:id', controller.BookController.create);

router.post('/book', controller.BookController.save);

router.get('/book/delete/:id', controller.BookController.delete);

module.exports = router;
