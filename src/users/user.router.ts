import express from 'express';
import 'express-async-errors';
import userController from './user.controller';
import { permissionChecker, tokenChecker } from '../middlewares/auth.middleware';

const { getUser, getUsers, updateUser, deleteUser, createUser, countReads } = userController;

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/access/:id', countReads);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', tokenChecker, permissionChecker, updateUser);
userRouter.delete('/:id', tokenChecker, permissionChecker, deleteUser);

export default userRouter;
