import dotenv from 'dotenv';
dotenv.config(); // load .env file
import "reflect-metadata";
import morgan from "morgan";
import express from 'express';
import "express-async-errors";
import userRoutes from './routes/userRoutes';
import appErrorHandle from './handlers/errors/appErrorHandle';
import { AppError } from './handlers/errors/appError';

const app = express(); // create express app
app.use(express.json()); // parse json bodies
app.use(morgan('tiny')); // logging

//import routes
//errors
app.use(appErrorHandle); // error handler middleware

//user routes
app.use('/user', userRoutes);

app.use(() => {
  throw new AppError('Error 404: Route not found', 404);
});

// start express server
const port = process.env.PORT; // default port to listen
app.listen(port, function(){
  console.log('Server listening on port ' + port); // confirm server start
});
