var express = require('express');
var router = express.Router();

const lakossagController = require('../controller/lakossag_controller');

router.get('/', lakossagController.getAll);
router.get('/:id', lakossagController.getById);
router.post('/', lakossagController.create);
router.put('/:id', lakossagController.update);
router.delete('/:id', lakossagController.delete);

module.exports = router;