import { Router } from "express";
import { getUsersController } from "../controllers/teste1.controllers";

const usersRouter = Router();

usersRouter.get("", getUsersController);

export default usersRouter;
