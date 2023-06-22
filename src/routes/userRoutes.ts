import { Router } from "express";
import { userListController, userDeleteController, userCreateController, userUpdateController, userCounterController, counterController } from "../controllers/UserController";
import verifyAuthToken from "../middlewares/verifyAuthToken";
import { AuthController } from "../controllers/AuthController";

const userRoutes = Router();

// use localhost:3000/user/...
userRoutes.post("/auth", AuthController);

userRoutes.get("/list", userListController);

userRoutes.delete("/delete/:id", verifyAuthToken, userDeleteController);

userRoutes.post("/create", userCreateController);

// test with put, but can patch also...
userRoutes.put("/update/:id", verifyAuthToken, userUpdateController);

userRoutes.get("/counter/:id", userCounterController);

userRoutes.get("/:id", counterController);

export default userRoutes;
