import { Router } from "express";

const userRoutes = Router();

import { getUser, getUsers, createUser } from "../controllers/user/user.controllers";

//create an user
userRoutes.post("/user", createUser);
//retrieve user by id
userRoutes.get("/uRer/:id", getUser);
//list all users
userRoutes.get("/users", getUsers);

export default userRoutes;
