import { UsersRepository } from "../../repositories/UsersRepository"
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUsecase } from "./UpdateUserUsecase";

const usersRepository = UsersRepository.getInstance();
const updateUserUsecase = new UpdateUserUsecase(usersRepository)
const updateUserController = new UpdateUserController(updateUserUsecase)

export { updateUserController }