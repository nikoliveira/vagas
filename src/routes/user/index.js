import { Router } from "express";

import { createUserVerifyFieldsMiddleware } from "../../middleware/createUserVerifyFields.middleware.js";
import { updatePartialUserVerifyFieldsMiddleware } from "../../middleware/updatePartialUserVerifyFields.middleware.js";
import { isAuthenticatedMiddleware } from "../../middleware/isAuthenticated.middleware.js";
import { isAdmMiddleware } from "../../middleware/isAdm.middleware.js";

import { createUserController } from "../../controllers/user/createUser.controller.js";
import { getAllUsersController } from "../../controllers/user/getAllUsers.controller.js";
import { retrieveUserController } from "../../controllers/user/retrieveUser.controller.js";
import { updatePartialUserController } from "../../controllers/user/updatePartialUser.controller.js";
import { deleteUserController } from "../../controllers/user/deleteUser.controller.js";
import { updateTotalUserVerifyFieldsMiddleware } from "../../middleware/updateTotalUserVerifyFields.middleware copy.js";
import { updateTotalUserController } from "../../controllers/user/updateTotalUser.controller.js";
import { readingsCounterController } from "../../controllers/user/readingsCounter.controller.js";

const router = Router();

export const userRoutes = () => {
  router.post("", createUserVerifyFieldsMiddleware, createUserController);

  router.get("", getAllUsersController);
  router.get("/:userId", retrieveUserController);
  router.get("/counter/:userId", readingsCounterController);

  router.use(isAuthenticatedMiddleware, isAdmMiddleware);

  router.patch(
    "/:userId",

    updatePartialUserVerifyFieldsMiddleware,
    updatePartialUserController
  );
  router.put(
    "/:userId",
    updateTotalUserVerifyFieldsMiddleware,
    updateTotalUserController
  );

  router.delete("/:userId", deleteUserController);

  return router;
};
