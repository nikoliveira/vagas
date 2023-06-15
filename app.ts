import express from 'express';
import bodyParser from 'body-parser';
const app = express();

import teste1 from './teste1';
import teste2 from './teste2';
import teste3 from './teste3';
import teste4 from './teste4';
import teste5 from './teste5';

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get('/user', teste1.getUser);
app.get('/users', teste1.getUsers);
app.post('/users', teste2);
app.delete('/users', teste3);
app.put('/users', teste4);
app.get('/users/access', teste5);

const port = 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
