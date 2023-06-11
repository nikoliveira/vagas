import express from 'express';
import UserController from '../controllers/UserController.mjs';
import { adminMiddleware } from '../middleware.mjs';
import CheckRoleMiddleware from '../middleware/CheckRole.mjs';
const router = express.Router();
const controller = new UserController();
const middleware = new CheckRoleMiddleware("ADMIN");
router.get('/', function(req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>]
  delete users/ </br>
  delete users/:id </br>
  put users/:id </br>
  `);
})
router.get('/users/access', (req, res) => controller.getTotal(req, res));
router.get('/users', (req, res) =>  controller.getUsers(req, res));
router.get('/user', (req, res) => controller.getUser(req, res));
router.delete('/users/:id',adminMiddleware, (req, res) =>  controller.deleteUser(req, res));
router.post('/users', (req, res) => controller.createUser(req, res));
router.put('/users/:id',adminMiddleware,(req, res) => controller.updateUser(req, res));

export default router;