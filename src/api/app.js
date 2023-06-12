var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const testesRouter = require('../routes/testes.routes');

// Movido para o arquivo "./src/routes/testes.routes.js"
// var teste1 = require("../services/teste1.services");
// var teste2 = require("../services/teste2.services");
// var teste3 = require("../services/teste3.services");
// var teste4 = require("../services/teste4.services");
// var teste5 = require("../services/teste5.services");

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

app.use(testesRouter);

module.exports = app;

// Movido para o arquivo "./src/routes/testes.routes.js"
// app.get("/user", teste1.getUser);
// app.get("/users", teste1.getUsers);
// app.post("/users", teste2)
// app.delete("/users", teste3)
// app.put("/users", teste4)
// app.get("/users/access", teste5);

// Movido para o arquivo "./src/api/server.js"
// const port  = 3000;
// app.listen(port, function(){
//   console.log('Express server listening on port ' + port);
// });