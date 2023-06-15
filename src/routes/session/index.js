import { Router } from "express";
import { userLoginController } from "../../controllers/session/userLogin.controller.js";

const router = Router();

export const sessionRoutes = () => {
  router.post("", userLoginController);

  return router;
};
