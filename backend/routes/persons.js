var express = require('express');
var router = express.Router();
var Person = require('../routes/persons.json');

router.get('/', function(req, res, next) {
  res.json(Person);
});

module.exports = router;