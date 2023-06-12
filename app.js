const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const validateUserPermissions = require("./src/middlewares/validateUserPermissions");
const validateRequiredBody = require("./src/middlewares/validateRequiredBody");
const UserController = require("./src/controllers/userController");

const userController = new UserController();

const teste1 = require("./teste1");
const teste2 = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", userController.getUser);
app.get("/users", userController.getUsers);
app.post("/users", validateRequiredBody, userController.createUser);
app.delete("/users", validateUserPermissions, teste3)
app.put("/users", validateUserPermissions, teste4)
app.get("/users/access", teste5);


const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});