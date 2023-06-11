// import bodyParser from 'body-parser';
// import express from 'express';
// import { dirname } from 'node:path';

// const app = express();

// app.set('view engine', 'jade');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(dirname + '/public'));

// app.get('/', function(req, res) {
//   res.send(`get user/ </br>
//   get users/ </br>
//   post users/ </br>]
//   delete users/ </br>
//   delete users/:id </br>
//   put users/ </br>
//   `);
// });

// app.get('/user', getUser);
// app.get('/users', getUsers);
// app.post('/users', addUser);
// app.delete('/users', adminMiddleware, remove);
// app.put('/users/:id', adminMiddleware,update);
// app.get('/users/access', total);

// const port = 3000;
// app.listen(port, function() {
//   console.log('Express server listening on port ' + port);
// });

import express from 'express';
import userRoutes from './routes/UserRoutes.mjs';

const app = express();

app.use(express.json());

app.use(userRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});