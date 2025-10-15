var express = require('express');
var router = express.Router();

const jegyzetekController = require("../controllers/jegyzetek_controller");

router.get('/', jegyzetekController.getAll);
router.post('/', jegyzetekController.create);
router.get('/cim/:cim', jegyzetekController.getByCim);
router.get('/:id', jegyzetekController.getById);
router.get('/public/:public', jegyzetekController.getByPublic);
router.put('/:id', jegyzetekController.update);
router.delete('/:id', jegyzetekController.delete);

module.exports = router;