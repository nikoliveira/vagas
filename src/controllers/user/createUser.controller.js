import { createUserService } from "../../services/user/createUser.service.js";

export const createUserController = (req, res) => {
  const { name, job, isAdm, password } = req.body;

  const createdUser = createUserService({ name, job, isAdm, password });

  return res.status(201).json(createdUser);
};
