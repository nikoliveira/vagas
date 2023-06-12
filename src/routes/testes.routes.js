// Rotas da aplicação.

const { Router } = require('express');

const teste1Controller = require('../controllers/teste1.controller');
const teste2Controller = require('../controllers/teste2.controller');
const teste3Controller = require('../controllers/teste3.controller');
const teste4Controller = require('../controllers/teste4.controller');
const teste5Controller = require('../controllers/teste5.controller');
const verifyToken = require('../middlewares/verifyToken');

const testesRouter = Router();

testesRouter.get('/user', teste1Controller.getUser);
testesRouter.get('/users', teste1Controller.getUsers);
testesRouter.post('/users', teste2Controller.createUser);
testesRouter.delete('/users', verifyToken, teste3Controller.deleteUser);
testesRouter.put('/users', verifyToken, teste4Controller.updateUser);
testesRouter.get('/users/access', teste5Controller.getUserSearchCount);

module.exports = testesRouter;

