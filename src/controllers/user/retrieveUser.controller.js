import { retrieveUserService } from "../../services/user/retrieveUser.service.js";

export const retrieveUserController = (req, res) => {
  const { userId } = req.params;

  const user = retrieveUserService(userId);

  return res.status(200).json(user);
};
