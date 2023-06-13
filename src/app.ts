import express, { Application } from 'express';
import winston from 'winston';

import { router as usersRoutes } from "./routes/api/users.routes"
import { router as authRouter } from "./routes/api/auth.routes"

const app: Application = express()

app.set('view engine', 'jade');

export const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: "logs/api/getUser.txt" }),
  ],
});

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRoutes);
app.use("/api/login", authRouter);

export default app;
