import express, { Application } from "express";
import "express-async-errors";
import bodyParser from "body-parser";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import userRouter from "./routes/user.routes";
import usersRouter from "./routes/users.routes";
import sessionRoutes from "./routes/session.routes";

const app: Application = express();

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.use("/user", userRouter);
app.use("/users", usersRouter);
app.use("/login", sessionRoutes);

app.use(handleErrorMiddleware);

export default app;
