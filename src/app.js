const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const userController = require('./controllers/userController');
const checkPermission = require("./middleware/hasPermission"); // Importa o middleware de verificação de permissão


app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send(`
      get user/ </br>
      get users/ </br>
      post users/ </br>
      delete users/ </br>
      put users/ </br>
  `);
});

app.get("/user", userController.getUser);
app.get("/users", userController.getUsers);
app.post("/users", userController.addUser);
app.delete("/users", checkPermission, userController.deleteUser);
app.put("/users", checkPermission, userController.updateUser);
app.get("/users/access", userController.getUserSearchCount);
app.put("/users/permissions", userController.createPermissionsUser);


const port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});