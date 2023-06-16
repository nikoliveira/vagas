let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let teste1 = require("../teste1");
let teste2 = require("../teste2");
let teste3 = require("../teste3");
let teste4 = require("../teste4");
let teste5 = require("../teste5");



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

app.get("/user/:id", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2.updateUser)
app.delete("/users", teste3.deleteUser)
app.put("/users", teste4.update)
app.get("/users/access/:id", teste5.listUser);

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
