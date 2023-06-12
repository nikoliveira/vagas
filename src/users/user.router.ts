import express from 'express';
import userController from './user.controller';

const { getUser, getUsers, updateUser, deleteUser, createUser, countReads } = userController;

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/access/:id', countReads);
userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
