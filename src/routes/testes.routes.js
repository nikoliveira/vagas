const { Router } = require('express');

var teste1Controller = require('../controllers/teste1.controller');
var teste2Controller = require('../controllers/teste2.controller');
var teste3Controller = require('../controllers/teste3.controller');
var teste4Controller = require('../controllers/teste4.controller');
var teste5Controller = require('../controllers/teste5.controller');

const testesRouter = Router();

testesRouter.get('/user', teste1Controller.getUser);
testesRouter.get('/users', teste1Controller.getUsers);
// testesRouter.post('/users', teste2Controller);
// testesRouter.delete('/users',teste3Controller);
// testesRouter.put('/users', teste4Controller);
// testesRouter.get('/users/access', teste5Controller);

module.exports = testesRouter;

