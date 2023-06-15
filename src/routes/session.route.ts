import { Router } from "express";

const sessionRoutes = Router();

import { createSessionController } from "../controllers/session/sessions.controller";

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
