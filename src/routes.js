import { Router } from 'express'
import { getAllUsers, getUserByName} from './controller/teste1'

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
//   router.post("/users", teste2)
//   router.delete("/users", teste3)
//   router.put("/users", teste4)
//   router.get("/users/access", teste5);
  
  export default routes