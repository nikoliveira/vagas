var express = require('express');
var bodyParser = require('body-parser');

var isAuthenticated = require('./utils/middlewares/isAuthenticated');
var hasFeature = require('./utils/middlewares/hasFeature');

var app = express();

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");


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
  get users/access </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", isAuthenticated, teste2)
app.delete("/users", isAuthenticated, hasFeature('user:other:delete'), teste3)
app.put("/users", isAuthenticated, hasFeature('user:other:update'), teste4)
app.get("/users/access", teste5);
app.get('/features', function(req, res){
  res.send(`user:other:update </br>
  user:other:delete </br>
  `);
});

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});