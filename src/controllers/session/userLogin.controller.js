import { userLoginService } from "../../services/session/userLogin.service.js";

export const userLoginController = (req, res) => {
  const data = req.body;

  const loggedUser = userLoginService(data);

  return res.json(loggedUser);
};
