require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var middleware = require('./middleware/authMiddleware');

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");

var authenticate = require('./authValidate');

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`post auth/ </br>
  get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  get users/access/ </br>
  `);
});

app.get("/user-by-id", teste1.getUserById);
app.post("/auth", authenticate);
app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2);
app.delete("/users", middleware, teste3);
app.put("/users", middleware, teste4);
app.get("/users/access", teste5);


const port  = 3000;
app.listen(port, function(){
  console.log(`Express server listening on port ${port} | Local port: ${process.env.LOCAL_PORT}`);
});