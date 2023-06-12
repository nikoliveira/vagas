var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");
var authentication = require("./teste6")

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// ---configuração middleware teste 6---
app.use(authentication.token);
// acessa tokens mockados de usuário

app.use(authentication.auth);
// verifica qual a permissão do usuário

var admin = authentication.permission('admin');
var user = authentication.permission('user');
// ---final config middleware teste 6---

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
app.delete("/users", admin, teste3)
app.put("/users", admin, teste4)
// adicionado no teste 3 e teste 4 middleware para permissao para usuario apenas com a role admin poder acessar.
app.get("/users/access", teste5);


const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});