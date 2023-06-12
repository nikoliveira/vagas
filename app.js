const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const teste1 = require("./teste1");
const teste2 = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");
const { handleError, authenticate } = require('./middlewares');


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(`get users/id </br>
  get users/ </br>
  post users/  isAdmin opcional </br>
  delete users/id  Only Admin, header auth: user id </br>
  put users/id Only Admin, header auth: user id </br>
  get users/access/id
  `);
});

app.get("/users/:id", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2)
app.delete("/users/:id", authenticate, teste3)
app.put("/users/:id", authenticate,teste4)
app.get("/users/access/:id", teste5);
app.use((err, req, res, next) => {
  handleError(err, res)
})

const port  = 3000;
app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});