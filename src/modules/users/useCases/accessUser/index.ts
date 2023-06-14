import { UsersRepository } from "../../repositories/UsersRepository"
import { AccessUserController } from "./AccessUserController";
import { AccessUserUsecase } from "./AccessUserUsecase";

const usersRepository = UsersRepository.getInstance();
const accessUserUsecase = new AccessUserUsecase(usersRepository)
const accessUserController = new AccessUserController(accessUserUsecase)

export { accessUserController }