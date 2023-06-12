import { Router } from "express";
import { getUserController } from "../controllers/teste1.controllers";

const userRouter = Router();

userRouter.get("", getUserController);

export default userRouter;
