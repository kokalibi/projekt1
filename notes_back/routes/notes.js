var express = require('express');
var router = express.Router();

const notesController = require('../controller/notes_controller');

router.get('/', notesController.getAll);
router.get('/:id', notesController.getById);
router.post('/', notesController.create);
router.put('/:id', notesController.update);
router.delete('/:id', notesController.delete);

module.exports = router;