import type {Request, Response, NextFunction} from 'express';
import UserModel from '../models/User';

const getUser = (req: Request, res: Response, next: NextFunction) => {
  const {name} = req.query;

  if (typeof name !== 'string') {
    res.send('Usuário inválido.');
  }

  const userModel = new UserModel();

  const findUser = userModel.getUser(name as string);

  res.status(200).send(findUser);
};

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  // res.send(data);
};

export default {
  getUser,
  getUsers,
};
