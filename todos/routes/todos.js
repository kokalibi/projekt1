var express = require('express');
var router = express.Router();

const todosController = require('../controller/todosController');

router.get('/', todosController.getAll);
router.get('/:id', todosController.getById);
router.post('/', todosController.create);
router.put('/:id', todosController.update);
router.delete('/:id', todosController.delete);

module.exports = router;
