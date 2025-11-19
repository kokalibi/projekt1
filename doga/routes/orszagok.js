var Express = require('express');
var router = Express.Router();
const orszagokController = require('../controllers/orszagok_controller');
const { authenticateToken, isAdmin } = require('../middleware/authJwt');

// Minden útvonal védett
router.use('/',[authenticateToken,isAdmin]);

router.get('/', orszagokController.getAll);
router.post('/', orszagokController.create);
router.get('/:id', orszagokController.getById);
router.put('/:id', orszagokController.update);
router.get('/nev/:nev', orszagokController.getByNev);
router.delete('/:id', orszagokController.delete);
router.get('/kezdo/:kezdo', orszagokController.getByKezdoBetuk);
module.exports = router;