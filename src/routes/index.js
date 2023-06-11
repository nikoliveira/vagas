const express = require('express');
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/isAdmin");

const teste1Controller = require('../controllers/teste1');
const teste2Controller = require('../controllers/teste2');
const teste3Controller = require('../controllers/teste3');
const teste4Controller = require('../controllers/teste4');
const teste5Controller = require('../controllers/teste5');
const LoginUser = require('../controllers/authenticationUser');

router.get('/users', teste1Controller.getUser);
router.post('/users', teste2Controller.createUser);
router.delete('/users', authMiddleware, isAdmin, teste3Controller.deleteUser);
router.put('/users', authMiddleware, isAdmin, teste4Controller.updateUser);
router.get('/users/:id', teste5Controller.getUserCount);

router.post('/users/login', LoginUser.LoginUser);

module.exports = router;
