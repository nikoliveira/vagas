import { readAllUsersService } from "../../services/user/readAllUsers.service.js";

export const readAllUsersController = (_, res) => {
  const users = readAllUsersService();

  return res.json(users);
};
