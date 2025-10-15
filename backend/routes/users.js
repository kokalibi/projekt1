var express = require('express');
var router = express.Router();

let users = [
  { id: 1, name: 'John Doe', email: 'john@gmail.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@gmail.com' },
  { id: 3, name: 'Alice Johnson', email: 'alice@gmail.com' }
];

/* GET users listing. */
router.get('/info', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }

  res.send('user id: ' + req.params.id);
});

router.delete('/:id', function(req, res, next) {
  users= users.filter(user => user.id !== parseInt(req.params.id));
  res.send('deleted user id: ' + req.params.id);
});

router.post('/', function(req, res, next) {
  const id = req.body;
  if (!id.name || !id.email) {
    return res.status(400).send('Name and email are required');
  }

  users.push({id: users.length + 1, name: id.name, email: id.email});
  res.send(`user id: ${id.name} - ${id.email}`);
});

router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  const body = req.body;

  let user = users.find(u => u.id === parseInt(id));
  if (!user) {
    return res.status(404).send('User not found');
  }
  if (!body.name || !body.email) {
    return res.status(400).send('Name and email are required');
  }

  user.name = body.name;
  user.email = body.email;
  res.send(`updated user id: ${id} - ${body.name} - ${body.email}`);
});

router.patch('/:id', function(req, res, next) {
  const id = req.params.id;
  const body = req.body;

  let user = users.find(u => u.id === parseInt(id));
  if (!user) {
    return res.status(404).send('User not found');
  }

  if (body.name) user.name = body.name;
  if (body.email) user.email = body.email;
  res.send(`patched user id: ${id} - ${user.name} - ${user.email}`);
});
module.exports = router;
