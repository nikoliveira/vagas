import { Router } from "express";

import { getAllUsersController } from "../../controllers/user/getAllUsers.controller.js";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller.js";

const router = Router();

export const userRoutes = () => {
  router.get("", getAllUsersController);
  router.get("/:userId", retrieveUserController);

  return router;
};
