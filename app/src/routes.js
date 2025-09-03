const app = require("express");
const router = app.Router();

const teste = require('./controllers/teste/teste');
const teste1 = require("./controllers/teste1/teste1");
const teste2 = require("./controllers/teste2/teste2");
const teste3 = require("./controllers/teste3/teste3");
const teste4 = require("./controllers/teste4/teste4");
const teste5 = require("./controllers/teste5/teste5");

router.get('/',teste.getAllUser)
router.get("/user", teste1.getUser);
router.get("/users", teste1.getUsers);
router.post("/users", teste2);
router.delete("/users", teste3);
router.put("/users", teste4);
router.get("/users/access", teste5);

module.exports = router;
