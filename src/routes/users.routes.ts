import { Router } from "express";
import { getUsersController } from "../controllers/teste1.controllers";
import ensurePropertiesExistsMiddleware from "../middlewares/ensurePropertiesExists.middleware";
import postUserController from "../controllers/teste2.controllers";

const usersRouter = Router();

usersRouter.get("", getUsersController);
usersRouter.post("", ensurePropertiesExistsMiddleware, postUserController);

export default usersRouter;
