
const express = require('express');
const app = express();

import routes from "./routes";

const teste1 = require("./challenges/teste1");
const teste2 = require("./challenges/teste2");
const teste3 = require("./challenges/teste3");
const teste4 = require("./challenges/teste4");
const teste5 = require("./challenges/teste5");


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());
app.use(routes)

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2)
app.delete("/users", teste3)
app.put("/users", teste4)
app.get("/users/access", teste5);


const port  = 8080;
app.listen({ port, host: "0.0.0.0" }, () => console.log("Server is running smoothly on port:" + port));