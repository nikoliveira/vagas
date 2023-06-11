import express, { Application } from 'express';

import { router as usersRoutes } from "./routes/api/users.routes"
import { router as defaultRoutes } from "./routes/api/default.routes"

const app: Application = express()

// app.set('view engine', 'jade');
// app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", defaultRoutes);
app.use("/api/users", usersRoutes);

export default app;
