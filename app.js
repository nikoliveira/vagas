// Import required modules
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var middleware = require("./middleware");

// Import route handlers
var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");

// Set the view engine to Jade
app.set('view engine', 'jade');

// Configure body-parser middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure body-parser middleware for JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

// Define the root route handler
app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

// Define route handlers
app.get("/user", teste1.getUser);
app.get("/user/read-count", teste5);
app.get("/users", teste1.getUsers);
app.post("/users", middleware.validateUserPermissions, teste2);
app.delete("/users/:id", middleware.validateUserPermissions, teste3.deleteUsers);
app.put("/users", middleware.validateUserPermissions, teste4.updateUsers);

// Start the server
const port = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
