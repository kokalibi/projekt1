var express = require('express');
var router = express.Router();

const idopontokController = require('../controller/idopontok_controller');

router.get('/', idopontokController.getAll);
router.get('/:id', idopontokController.getById);
router.post('/', idopontokController.create);
router.put('/:id', idopontokController.update);
router.delete('/:id', idopontokController.delete);

module.exports = router;