import { UsersRepository } from "../../repositories/UsersRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUsecase } from "./GetUserUsecase";

const usersRepository = UsersRepository.getInstance();
const getUserUsecase = new GetUserUsecase(usersRepository)
const getUserController = new GetUserController(getUserUsecase)

export { getUserController }