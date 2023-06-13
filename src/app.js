var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');


app.set('view engine', 'jade');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);

const port = 3000;
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});

module.exports = app;