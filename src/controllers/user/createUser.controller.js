import { createUserService } from "../../services/user/createUser.service.js";

export const createUserController = (req, res) => {
  const { name, job } = req.body;

  const createdUser = createUserService({ name, job });

  return res.status(201).json(createdUser);
};
