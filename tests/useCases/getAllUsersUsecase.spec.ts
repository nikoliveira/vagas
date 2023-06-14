import fakeData from "../../src/fakeData";
import { UserBuilder } from "../../src/modules/users/model/userBuilder";
import { UsersRepository } from "../../src/modules/users/repositories/UsersRepository";
import { GetAllUsersUsecase } from "../../src/modules/users/useCases/getAllUsers/GetAllUsersUsecase";

describe("GetAll UserCase", () => {
  let getAllUsersUsecase: GetAllUsersUsecase;
  let usersRepository: UsersRepository;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
    getAllUsersUsecase = new GetAllUsersUsecase(usersRepository);
  });

  it("Deve retornar todos usuarios", () => {
    const users = getAllUsersUsecase.execute();
    expect(users).toStrictEqual([
      UserBuilder.build(fakeData[0]),
      UserBuilder.build(fakeData[1]),
    ]);
  });
});