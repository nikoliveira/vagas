import { Router } from "express";
import loginController from "../controllers/teste6.controllers";

const sessionRoutes = Router();

sessionRoutes.post("", loginController);

export default sessionRoutes;
