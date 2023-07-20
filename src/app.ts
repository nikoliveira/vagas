import dotenv from 'dotenv';
dotenv.config();
import express, {type Application} from 'express';
import bodyParser from 'body-parser';

import UserController from './controllers/UserController';
import Authorization from './middleware/authorization';

class App {
  protected app: Application;
  protected userController: UserController;
  protected port: string | 3000;
  protected auth: Authorization;

  constructor() {
    this.app = express();
    this.userController = new UserController();
    this.setConfig();
    this.auth = new Authorization();
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
    this.app.get('/users/access', this.userController.getCallUser);
    this.app.get('/pseudologin', this.userController.generateToken);
    this.app.post('/users', this.userController.setUser);
    this.app.delete('/users', this.auth.verifyAuth, this.userController.deleteUser);
    this.app.put('/users', this.auth.verifyAuth, this.userController.updateUser);
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
