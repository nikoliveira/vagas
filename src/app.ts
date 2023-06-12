import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './users/user.router';
import errorHandler from './middlewares/errorHandler.middleware';

const app = express();

app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.use('/users', userRouter);
app.use(errorHandler);

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
