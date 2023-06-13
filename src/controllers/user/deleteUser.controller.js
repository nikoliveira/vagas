import { deleteUserService } from "../../services/user/deleteUser.service.js";

export const deleteUserController = (req, res) => {
  const { userId } = req.params;

  deleteUserService(userId);

  return res.status(204).json({});
};
