import { Request, Response, Router } from "express";
import { getAllUsersController } from "../../modules/users/useCases/getAllUsers";
import { getUserController } from "../../modules/users/useCases/getUser";
import { createUserController } from "../../modules/users/useCases/createUser";
import { deleteUserController } from "../../modules/users/useCases/deleteUser";
import { updateUserController } from "../../modules/users/useCases/updateUser";
import { authToken } from "../../middlewares/auth/auth";
import { getUserMiddleware } from "../../middlewares/logger/getUserMiddleware";
import { accessUserController } from "../../modules/users/useCases/accessUser";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  getAllUsersController.handle(req, res);
})

router.get("/:user_id", getUserMiddleware, (req: Request, res: Response) => {
  getUserController.handle(req, res);
})

router.get("/access/user", (req: Request, res: Response) => {
  accessUserController.handle(req, res);
})

router.post("/", (req: Request, res: Response) => {
  createUserController.handle(req, res);
})

router.put("/:user_id", authToken, (req: Request, res: Response) => {
  updateUserController.handle(req, res);
})

router.delete("/:user_id", authToken, (req: Request, res: Response) => {
  deleteUserController.handle(req, res);
})

export { router };