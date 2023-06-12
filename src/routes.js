import { Router } from 'express'
import { getAllUsers, getUserByName} from './controller/teste1'
import { addUser } from './controller/teste2';
import { deleteUser } from './controller/teste3';
import { updateUser } from './controller/teste4';
import { getUserReadCount } from './controller/teste5';

const routes = new Router()

routes.get('/', function(req, res){
    res.send(`get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
    `);
  });
  
  routes.get("/user", getUserByName);
  routes.get("/users", getAllUsers);
  routes.post("/users", addUser)
  routes.delete("/users", deleteUser)
  routes.put("/users", updateUser)
  routes.get("/users/access",getUserReadCount);
  
  export default routes