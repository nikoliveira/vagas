import { Router } from "express";
import { getUsersController } from "../controllers/teste1.controllers";
import ensurePropertiesExistsMiddleware from "../middlewares/ensurePropertiesExists.middleware";
import postUserController from "../controllers/teste2.controllers";
import deleteUserController from "../controllers/teste3.controllers";
import putUserController from "../controllers/teste4.controllers";

const usersRouter = Router();

usersRouter.get("", getUsersController);
usersRouter.post("", ensurePropertiesExistsMiddleware, postUserController);
usersRouter.delete("", deleteUserController);
usersRouter.put("", ensurePropertiesExistsMiddleware, putUserController);

export default usersRouter;
