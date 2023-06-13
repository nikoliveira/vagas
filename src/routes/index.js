var express = require('express');
var router = express.Router();

var teste1 = require("../controllers/teste1");
var teste2 = require("../controllers/teste2");
var teste3 = require("../controllers/teste3");
var teste4 = require("../controllers/teste4");
var teste5 = require("../controllers/teste5");

router.get('/', function (req, res) {
    res.send(`get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
    `);
});
router.get("/user", teste1.getUser);
router.get("/users", teste1.getUsers);
router.post("/users", teste2.createUser);
router.delete("/users/:id", teste3.deleteUser);
router.put("/users", teste4);
router.get("/users/access", teste5);

module.exports = router;