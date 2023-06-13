import { UsersRepository } from "../../repositories/UsersRepository"
import { GetAllUsersController } from "./getAllUsersController";
import { GetAllUsersUsecase } from "./getAllUsersUsecase";

const usersRepository = UsersRepository.getInstance();
const getAllUsersUsecase = new GetAllUsersUsecase(usersRepository)
const getAllUsersController = new GetAllUsersController(getAllUsersUsecase)

export { getAllUsersController }