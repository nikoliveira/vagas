var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var route = require("./routes/index")
var cors = require('cors')
const port = 3000;


app.set('view engine', 'jade');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.use("/", route);
app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});