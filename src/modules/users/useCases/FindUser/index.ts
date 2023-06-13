import { UsersRepository } from "../../repositories/UsersRepository";
import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from "./FindUserUseCase";


const usersRepository = UsersRepository.getInstance();

const findUserUseCase = new FindUserUseCase(usersRepository);

const findUserController = new FindUserController(findUserUseCase);

export { findUserController };