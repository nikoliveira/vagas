import express from "express";
import "express-async-errors";
import "reflect-metadata";
import userRoutes from "./routes/user.routes";
import sessionRoutes from "./routes/session.route";
import handleAppErrorMiddleware from "./errors/handleAppError";

const app = express();

app.use(express.json());

//users routes
app.use("/user", userRoutes);

//session route
app.use("/login", sessionRoutes);

//errors
app.use(handleAppErrorMiddleware);

export default app;
