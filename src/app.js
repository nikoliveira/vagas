const express = require('express');
const swaggerUi = require('swagger-ui-express')
const bodyParser = require('body-parser');
const app = express();
const route = require("./routes/index")
const cors = require('cors')
const port = 3000;
const swaggerDocs = require('./swagger.json');


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
app.use("/doc", swaggerUi.serve,swaggerUi.setup(swaggerDocs));
app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});