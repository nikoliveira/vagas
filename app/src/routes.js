const app = require("express");
const router = app.Router();

const teste = require("./services/teste/teste");
const teste1 = require("./services/teste1/teste1");
const teste2 = require("./services/teste2/teste2");
const teste3 = require("./services/teste3/teste3");
const teste4 = require("./services/teste4/teste4");
const teste5 = require("./services/teste5/teste5");

const { auth } = require("./middlewares/auth");
const { requirePermission, PERMS } = require("./middlewares/permissions");

router.use(auth);

router.get("/", teste.getAllUser);
router.get("/user", teste1.getUser);
router.get("/users", teste1.getUsers);
router.post("/users", teste2);

router.delete("/users", requirePermission(PERMS.DELETE_USER), teste3);
router.put("/users", requirePermission(PERMS.UPDATE_USER), teste4);

router.get("/users/access", teste5);

module.exports = router;
