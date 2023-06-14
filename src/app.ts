import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import userRouter from './users/user.router';
import errorHandler from './middlewares/errorHandler.middleware';
import authRouter from './auth/auth.router';
import swaggerFile from './swagger_output.json';

const app = express();

app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.use('/', (req, res) => {
  res.send('OK!');
});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.use(errorHandler);

const port = 3000;
app.listen(port, function () {
  console.log(`Express server listening on port ${port}`);
});
