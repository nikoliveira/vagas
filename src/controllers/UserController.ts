import type {Request, Response, NextFunction} from 'express';
import UserModel from '../models/User';
import type BodyRequest from '../interfaces/BodyRequest';

/**
 * Class UserController that listen user request and give responses.
 */
class UserController {
  protected model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  // Teste 1
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

  // Teste 2
  setUser = (req: BodyRequest<{name: string; job: string}>, res: Response, _next: NextFunction) => {
    const {name, job} = req.body;

    const newUser = this.model.setUser({name, job});

    res.status(201).send(newUser);
  };
}

export default UserController;
