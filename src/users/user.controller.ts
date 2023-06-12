import { RequestHandler } from "express";
import userService from "./user.service";
import APIError from "../utils/errorClass";

const validateId = (id: any) => {
  if (isNaN(+id)) throw new APIError("O ID deve ser um número.", "badRequest");
};

const validateUserData = (data: any, optional: boolean) => {
  const { name, job } = data;

  if (!optional && (name === undefined || job === undefined)) {
    throw new APIError("Nome e cargo são obrigatórios.", "badRequest");
  }

  if (!name && !job) throw new APIError("Nome ou cargo inválidos.", "badRequest");
  if (name && typeof name !== "string") throw new APIError("Nome deve ser uma string.", "badRequest");
  if (job && typeof job !== "string") throw new APIError("Cargo deve ser uma string.", "badRequest");
}

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

const createUser: RequestHandler = (req, res) => {
  const { name, job } = req.body;
  validateUserData({ name, job }, false);
  const newUser = userService.createUser(name, job);
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
  validateUserData({ name, job }, true);
  userService.updateUser(+id, { name, job });
  res.status(200).send();
};

const countReads: RequestHandler = (req, res) => {
  const { id } = req.params;
  validateId(id);
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
