import dotenv from 'dotenv';
dotenv.config();
import express, {type Application} from 'express';
import bodyParser from 'body-parser';

import teste1 from './controllers/UserController';
import teste2 from './controllers/teste2';
import teste3 from './controllers/teste3';
import teste4 from './controllers/teste4';
import teste5 from './controllers/teste5';
import UserController from './controllers/UserController';

class App {
  protected app: Application;
  protected userController: UserController;
  protected port: string | 3000;

  constructor() {
    this.app = express();
    this.userController = new UserController();
    this.setConfig();
    this.routes();
    this.port = process.env.PORT ?? 3000;
  }

  setConfig() {
    this.app.set('view engine', 'jade');
    this.app.use(express.urlencoded());

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
  }

  routes() {
    this.app.get('/user', this.userController.getUser);
    this.app.get('/users', this.userController.getUsers);
    // this.app.post('/users', this.userController);
    // this.app.delete('/users', this.userController);
    // this.app.put('/users', this.userController);
    // this.app.get('/users/access', this.userController);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Express server listening on port ${this.port}`);
    });
  }
}

// app.use(express.static(__dirname + '/public'));

// // app.get('/', (req, res) => {
// //   res.send(`get user/ </br>
// //   get users/ </br>
// //   post users/ </br>
// //   delete users/ </br>
// //   put users/ </br>
// //   `);
// // });

export default App;
