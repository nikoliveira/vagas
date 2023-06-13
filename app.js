const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes');
const app = express();

app.set('view engine', 'jade');
app.use([express.json(),express.urlencoded(), bodyParser.json(), bodyParser.urlencoded({ extended: true }), express.static(__dirname + '/public')])

// documentation 
app.get('/', (req, res) => {
  res.send(`get users/id </br>
  get users/ </br>
  post users/  isAdmin opcional </br>
  delete users/id  Only Admin, header auth: user id </br>
  put users/id Only Admin, header auth: user id </br>
  get users/access/id
  `);
});

// routes
router(app)


const port  = 3000;
app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});