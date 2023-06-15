import { Router } from "express";

const userRoutes = Router();

import {
  createUserController,
  retrieveUserController,
  listUsersController,
  deleteUserController,
  updateUserController,
  readingsCounterController,
} from "../controllers";

import verifyToken from "../middlewares/verifyToken.middleware";
import verifyAccountOwner from "../middlewares/accountOwner.middleware";

//create an user
userRoutes.post("", createUserController);

//retrieve user by id
userRoutes.get("/:id", retrieveUserController);

//list all users
userRoutes.get("", listUsersController);

//update user by id
userRoutes.patch("/:id", verifyToken, verifyAccountOwner, updateUserController);

//delete user by id
userRoutes.delete("/:id", verifyToken, verifyAccountOwner, deleteUserController);

//readings counter
userRoutes.get("/read/:id", readingsCounterController);

export default userRoutes;
