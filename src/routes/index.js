import { sessionRoutes } from "./session/index.js";
import { userRoutes } from "./user/index.js";

export const appRoutes = (app) => {
  app.use("/users", userRoutes());
  app.use("/session/login", sessionRoutes());
};
