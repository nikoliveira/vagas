import { getAllUsersService } from "../../services/user/getAllUsers.service.js";

export const getAllUsersController = (req, res) => {
  const users = getAllUsersService();

  return res.json(users);
};
