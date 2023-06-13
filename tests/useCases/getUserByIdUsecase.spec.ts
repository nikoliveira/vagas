import fakeData from "../../src/fakeData";
import { UsersRepository } from "../../src/modules/users/repositories/UsersRepository";
import { GetUserUsecase } from "../../src/modules/users/useCases/getUser/GetUserUsecase";

describe("Get by id UserCase", () => {
  let getUserUsecase: GetUserUsecase;
  let usersRepository: UsersRepository;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
    getUserUsecase = new GetUserUsecase(usersRepository);
  });

  it("Deve retornar um usuario", () => {
    const user = getUserUsecase.execute({ id: 1 });
    expect(user).toStrictEqual(fakeData[0]);
  });
});