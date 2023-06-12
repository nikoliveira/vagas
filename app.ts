import { validateUserPermissions } from "./middleware";

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var teste1 = require("./controllers/teste1");
var teste2 = require("./controllers/teste2");
var teste3 = require("./controllers/teste3");
var teste4 = require("./controllers/teste4");
var teste5 = require("./controllers/teste5");

var baseMapping = require("./controllers/baseMapping");
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get('/', baseMapping.baseUrl);
app.get("/user", teste1.getUser);
app.get("/users", validateUserPermissions , teste1.getUsers);
app.post("/users", teste2.addUser);
app.put("/users/:id", teste4.updateUser)
app.delete("/users/:id", teste3.deleteUser);
app.get("/users/access", teste5.coundUserVisit);


const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
