import { UsersRepository } from "../../repositories/UsersRepository"
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUsecase } from "./DeleteUserUsecase";

const usersRepository = UsersRepository.getInstance();
const deleteUserUsecase = new DeleteUserUsecase(usersRepository)
const deleteUserController = new DeleteUserController(deleteUserUsecase)

export { deleteUserController }