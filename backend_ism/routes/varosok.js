var express = require('express');
var router = express.Router();

const varosokController = require('../controllers/varosokController');

router.get('/', varosokController.getAllVarosok);

module.exports = router;