import { RequestHandler } from "express";
import userService from "./user.service";

const getUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  const user = userService.getUser(+id);
  res.status(200).json(user);
};

const getUsers: RequestHandler = (req, res) => {
  const users = userService.getUsers();
  res.status(200).json(users);
};

const createUser: RequestHandler = (req, res) => {
  const { name, job } = req.body;
  const newUser = userService.createUser(name, job);
  res.status(200).json(newUser);
};

const deleteUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  userService.deleteUser(+id);
  res.status(204).send();
};

const updateUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  const { name, job } = req.body;
  userService.updateUser(+id, { name, job });
  res.status(200).send();
};

const countReads: RequestHandler = (req, res) => {
  const { id } = req.params;
  const result = userService.countReads(+id);
  res.send(result);
};

export default {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  countReads,
};
