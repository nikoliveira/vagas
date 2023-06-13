const express = require('express');
const router = express.Router();

const { auth, verifyIsAdmin } = require('../middlewares/teste6');

const loginController = require("../controllers/loginController");

const teste1 = require("../controllers/teste1");
const teste2 = require("../controllers/teste2");
const teste3 = require("../controllers/teste3");
const teste4 = require("../controllers/teste4");
const teste5 = require("../controllers/teste5");

router.get('/', function (req, res) {
    res.send(`get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
    `);
});
router.post("/users/login", loginController.login);
router.get("/user", teste1.getUser);
router.get("/users", teste1.getUsers);
router.post("/users", teste2.createUser);
router.delete("/users/:id", auth, verifyIsAdmin, teste3.deleteUser);
router.put("/users/:id", auth, verifyIsAdmin, teste4.updateUser);
router.get("/users/access", teste5.getHowManyUserAccess);

module.exports = router;