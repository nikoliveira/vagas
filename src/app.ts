import express from "express";
import "express-async-errors";
import "reflect-metadata";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());

//users routes
app.use(userRoutes);

export default app;
