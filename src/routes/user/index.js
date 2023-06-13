import { Router } from "express";

import { getAllUsersController } from "../../controllers/user/getAllUsers.controller.js";

const router = Router();

export const userRoutes = () => {
  router.get("", getAllUsersController);

  return router;
};
