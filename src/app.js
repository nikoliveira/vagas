import express from 'express'
import bodyParser from 'body-parser';

import routes from './routes';
const app = express();
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());
app.use(routes)
app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});