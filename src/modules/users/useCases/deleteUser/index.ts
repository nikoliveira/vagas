import { UsersRepository } from "../../repositories/UsersRepository"
import { DeleteUserController } from "./CreateUserController";
import { DeleteUserUsecase } from "./CreateUserUsecase";

const usersRepository = UsersRepository.getInstance();
const deleteUserUsecase = new DeleteUserUsecase(usersRepository)
const deleteUserController = new DeleteUserController(deleteUserUsecase)

export { deleteUserController }