const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const teste5 = require("./teste5");
const userController = require("./controller/user.js");


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
app.post("/users", userController.postUser);
app.delete("/users", userController.deleteUser);
app.put("/users", userController.putUser);
app.get("/users/access", teste5);


const port  = 3000;
app.listen(port, function(){
  console.log('API is running on port ' + port);
});