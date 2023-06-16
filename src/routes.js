import { Router } from 'express'
import { getAllUsers, getUserByName} from './controller/teste1'
import { addUser } from './controller/teste2';
import { deleteUser } from './controller/teste3';
import { updateUser } from './controller/teste4';
import { getUserReadCount, incrementUserReadCount } from './controller/teste5';
import { findUser, validatePermissions } from './middlewares';


const routes = new Router()

routes.get('/', function(req, res){
    res.send(`get user/ </br>
    get users/ </br>
    post users/ </br>
    delete users/ </br>
    put users/ </br>
    `);
  });
  routes.get("/users", getAllUsers);
  routes.post("/users", addUser)
  
  routes.use(findUser)
  
  routes.get("/user", incrementUserReadCount, getUserByName)
  routes.delete("/users", validatePermissions, deleteUser)
  routes.put("/users", validatePermissions, updateUser)
  routes.get("/users/access", getUserReadCount)
  
  export default routes