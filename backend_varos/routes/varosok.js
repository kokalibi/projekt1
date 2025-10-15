var express = require('express');
var router = express.Router();
const varosokController = require("../controllers/varosok_controller");

router.get('/', varosokController.getAll);
router.post('/', varosokController.create);
router.get('/varos/:varos', varosokController.getByNev);
router.get('/:id', varosokController.getById);
router.get('/iranyitoszam/:iranyitoszam', varosokController.getByIranyitoszam);
router.put('/:id', varosokController.update);
router.delete('/:id', varosokController.delete);
module.exports = router;