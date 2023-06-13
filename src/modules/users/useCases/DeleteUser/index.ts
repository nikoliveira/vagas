import { UsersRepository } from "../../repositories/UsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


const usersRepository = UsersRepository.getInstance();

const deleteUserUseCase = new DeleteUserUseCase(usersRepository);

const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { deleteUserController };

