import { UsersRepository } from "../../repositories/UsersRepository"
import { CreateUserController } from "./CreateUserController";
import { CreateUserUsecase } from "./CreateUserUsecase";

const usersRepository = UsersRepository.getInstance();
const createUserUsecase = new CreateUserUsecase(usersRepository)
const createUserController = new CreateUserController(createUserUsecase)

export { createUserController }