import express from 'express';
var bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.send(
    `get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
  `);
});




const port  = 3000;

app.listen(port, () => {
  console.log(`Serving is running on http://localhost:${port}`);
});
