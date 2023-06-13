import { updateTotalUserService } from "../../services/user/updateTotalUser.service.js";

export const updateTotalUserController = (req, res) => {
  const { userId } = req.params;
  const data = req.body;

  const updatedUser = updateTotalUserService(userId, data);

  return res.status(200).json(updatedUser);
};
