import type {Request, Response, NextFunction} from 'express';
import UserModel from '../models/User';

class UserController {
  protected model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  getUser = (req: Request, res: Response, _next: NextFunction) => {
    const {name} = req.query;

    if (typeof name !== 'string') {
      res.send('Usuário inválido.');
    }

    const userModel = this.model;

    const findUser = userModel.getUser(name as string);

    res.status(200).send(findUser);
  };

  getUsers = (_req: Request, res: Response, _next: NextFunction) => {
    const users = this.model.getUsers();

    res.status(200).send(users);
  };
}

export default UserController;