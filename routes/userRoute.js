const { Router } = require('express')
const { authenticate } = require('./../middlewares') 
const { userController } = require('./../controller/index')

module.exports = (app) => {
  const router = Router()

  router.get("/:id", userController.getUser);
  router.get("", userController.getUsers);
  router.post("", userController.createUser)
  router.delete("/:id", authenticate, userController.deleteUser)
  router.put("/:id", authenticate,userController.updateUser)
  router.get("/access/:id", userController.accessUser);
  
  app.use("/users", router)
}