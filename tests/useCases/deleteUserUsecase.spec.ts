import fakeData from "../../src/fakeData";
import { UserBuilder } from "../../src/modules/users/model/userBuilder";
import { UsersRepository } from "../../src/modules/users/repositories/UsersRepository";
import { DeleteUserUsecase } from "../../src/modules/users/useCases/deleteUser/DeleteUserUsecase";
import { GetUserUsecase } from "../../src/modules/users/useCases/getUser/GetUserUsecase";

describe("Delete UserCase", () => {
  let deleteUserUsecase: DeleteUserUsecase;
  let usersRepository: UsersRepository;
  let getUserUsecase: GetUserUsecase;
  
  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
    deleteUserUsecase = new DeleteUserUsecase(usersRepository);
    getUserUsecase = new GetUserUsecase(usersRepository);
  });

  it("Deve deletar um usuario", () => {
    let user = getUserUsecase.execute({ id: 1 });
    expect(user).toStrictEqual(UserBuilder.build(fakeData[0]));
    deleteUserUsecase.execute({ id: 1 });
    expect(() => getUserUsecase.execute({ id: 1 }))
    .toThrow("User does not exist");
  });

  it("Deve deletar um usuario falhe", () => {
    expect(() => {
      deleteUserUsecase.execute({ id: 999 });
    }).toThrow();
  });
});