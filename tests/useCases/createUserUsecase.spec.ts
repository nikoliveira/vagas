import { UsersRepository } from "../../src/modules/users/repositories/UsersRepository";
import { CreateUserUsecase } from "../../src/modules/users/useCases/createUser/CreateUserUsecase";

describe("Create UserCase", () => {
  let createUserUsecase: CreateUserUsecase;
  let usersRepository: UsersRepository;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
    createUserUsecase = new CreateUserUsecase(usersRepository);
  });

  it("Deve criar um novo usuario", () => {
    const user = createUserUsecase.execute({ name: "Doctor", job: "Time Lord"});
    expect(user).toEqual({ id: 3, name: "Doctor", job: "Time Lord"});
  });
});