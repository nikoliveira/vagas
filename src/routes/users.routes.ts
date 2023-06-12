import { Router } from "express";
import { getUsersController } from "../controllers/teste1.controllers";
import ensurePropertiesExistsMiddleware from "../middlewares/ensurePropertiesExists.middleware";
import postUserController from "../controllers/teste2.controllers";
import deleteUserController from "../controllers/teste3.controllers";
import putUserController from "../controllers/teste4.controllers";
import countUserController from "../controllers/teste5.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

const usersRouter = Router();

usersRouter.get("", getUsersController);
usersRouter.post("", ensurePropertiesExistsMiddleware, postUserController);
usersRouter.delete("", ensureAuthMiddleware, ensureIsAdmMiddleware, deleteUserController);
usersRouter.put("", ensureAuthMiddleware, ensureIsAdmMiddleware, ensurePropertiesExistsMiddleware, putUserController);
usersRouter.get("/count-user", countUserController);

export default usersRouter;
