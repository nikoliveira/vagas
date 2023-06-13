import { UsersRepository } from "../../repositories/UsersRepository"
import { GetAllUsersController } from "./GetAllUsersController";
import { GetAllUsersUsecase } from "./GetAllUsersUsecase";

const usersRepository = UsersRepository.getInstance();
const getAllUsersUsecase = new GetAllUsersUsecase(usersRepository)
const getAllUsersController = new GetAllUsersController(getAllUsersUsecase)

export { getAllUsersController }