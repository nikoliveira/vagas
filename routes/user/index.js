import { Router } from "express";

import * as T1 from "../../tests/teste1.js";
import * as T2 from "../../tests/teste2.js";
import * as T3 from "../../tests/teste3.js";
import * as T4 from "../../tests/teste4.js";
import * as T5 from "../../tests/teste5.js";

const router = Router();

export const userRoutes = () => {
  // router.get("", T1.getUsers);

  return router;
};
