var express = require('express');
var router = express.Router();
const markaControllers = require('../controllers/markaController.js');

/* GET marka listing. */
router.get('/', markaControllers.getAll);
router.get('/:id', markaControllers.getById);
router.post('/', markaControllers.create);
router.delete('/:id', markaControllers.delete);
router.put('/:id', markaControllers.update);
module.exports = router;

