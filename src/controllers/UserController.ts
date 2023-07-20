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
  getUser = (req: Request, res: Response) => {
    const {name} = req.query;

    if (typeof name !== 'string') {
      res.send('Usuário inválido.');
    }

    const userModel = this.model;

    const findUser = userModel.getUser(name as string);

    res.status(200).json(findUser);
  };

  getUsers = (_req: Request, res: Response) => {
    const users = this.model.getUsers();

    res.status(200).send(users);
  };

  // Teste 2
  setUser = (req: BodyRequest<{name: string; job: string}>, res: Response) => {
    const {name, job} = req.body;

    const newUser = this.model.setUser({name, job});

    res.status(201).send(newUser);
  };

  getCallUser = (req: Request, res: Response) => {
    const {name} = req.query;

    const getCall = this.model.getCallUser(name as string);

    res.status(201).send(getCall);
  };

  // Teste 3
  deleteUser = (req: Request, res: Response) => {
    const {name} = req.query;

    if (typeof name !== 'string') {
      res.status(422).send('inválid');
    }

    const deleteUser = this.model.deleteUser(name as string);

    res.status(201).send(deleteUser);
  };

  // Teste 4
  updateUser = (req: Request, res: Response) => {
    const {id} = req.query;
    const {name, job} = req.body;

    const updateUser = this.model.updateUser(id as string, {name, job});

    res.status(201).send(updateUser);
  };

  generateToken = (req: Request, res: Response) => {
    const {name} = req.body;

    if (!name) {
      return res.status(404).send('Inválid name');
    }

    const getToken = this.model.generateToken(name as string);

    res.status(200).json(getToken);
  };
}

export default UserController;
