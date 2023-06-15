import { updatePartialUserService } from "../../services/user/updatePartialUser.service.js";

export const updatePartialUserController = (req, res) => {
  const { userId } = req.params;
  const data = req.body;

  const updatedUser = updatePartialUserService(userId, data);

  return res.status(200).json(updatedUser);
};
