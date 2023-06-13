import { userRoutes } from "./user/index.js";

export const appRoutes = (app) => {
  app.use("/users", userRoutes());
};
