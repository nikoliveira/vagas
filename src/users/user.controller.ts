import { RequestHandler } from 'express';
import userService from './user.service';
import APIError from '../utils/errorClass';
import joiValidate from '../utils/joiValidation';
import { createUserSchema, updateUserSchema } from './user.schema';

const validateId = (id: any) => {
  if (Number.isNaN(+id))
    throw new APIError('O ID deve ser um número.', 'badRequest');
};

const getUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  validateId(id);
  const user = userService.getUser(+id);
  res.status(200).json(user);
};

const getUsers: RequestHandler = (req, res) => {
  const users = userService.getUsers();
  res.status(200).json(users);
};

const createUser: RequestHandler = async (req, res) => {
  joiValidate(createUserSchema, req.body);
  const newUser = await userService.createUser(req.body);
  res.status(200).json(newUser);
};

const deleteUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  validateId(id);
  userService.deleteUser(+id);
  res.status(204).send();
};

const updateUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  validateId(id);
  const { name, job } = req.body;
  joiValidate(updateUserSchema, { name, job });
  userService.updateUser(+id, { name, job });
  res.status(204).send();
};

const countReads: RequestHandler = (req, res) => {
  const { id } = req.params;
  validateId(id);
  const result = userService.countReads(+id);
  res.status(200).json(result);
};

export default {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  countReads,
};
