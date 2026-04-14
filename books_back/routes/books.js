var express = require('express');
var router = express.Router();

const booksController = require('../controllers/books_controller');

router.get('/', booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', booksController.create);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.delete);

module.exports = router;