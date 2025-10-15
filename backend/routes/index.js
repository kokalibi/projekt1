var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product', function(req, res, next) {
  res.send("osszes segg");
});

router.post('/product', function(req, res, next) {
  res.send("osszes segg 2");
});

router.delete('/product', function(req, res, next) {
  res.send("osszes segg 3");
});

router.put('/product', function(req, res, next) {
  res.send("osszes segg 4");
});

router.patch('/product', function(req, res, next) {
  res.send("osszes segg 5");
});



module.exports = router;
