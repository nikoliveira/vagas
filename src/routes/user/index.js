import { Router } from "express";

import { createUserVerifyFieldsMiddleware } from "../../middleware/createUserVerifyFields.middleware.js";

import { getAllUsersController } from "../../controllers/user/getAllUsers.controller.js";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller.js";
import { createUserController } from "../../controllers/user/createUser.controller.js";

const router = Router();

export const userRoutes = () => {
  router.post("", createUserVerifyFieldsMiddleware, createUserController);

  router.get("", getAllUsersController);
  router.get("/:userId", retrieveUserController);

  return router;
};
