
const teste1 = require("../teste1");
const teste2 = require("../teste2");
const teste3 = require("../teste3");
const teste4 = require("../teste4");
const teste5 = require("../teste5");

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2)
app.delete("/users", teste3)
app.put("/users", teste4)
app.get("/users/access", teste5);