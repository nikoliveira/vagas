var { Router } = require('express');
const teste1 = require("../contollers/teste1");
const teste2 = require("../contollers/teste2");
const teste3 = require("../contollers/teste3");
const teste4 = require("../contollers/teste4");
const teste5 = require("../contollers/teste5");
const private = require("../midweres/private");
const route = Router()

route.get("/user", teste1.getUser);
route.get("/users", teste1.getUsers);
route.post("/users", teste2)
route.delete("/users", private,teste3)
route.put("/users",private, teste4)
route.get("/users/access", teste5);

module.exports = route
