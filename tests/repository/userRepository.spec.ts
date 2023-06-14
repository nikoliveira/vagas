import fakeData from "../../src/fakeData";
import { UserBuilder } from "../../src/modules/users/model/userBuilder";
import { UsersRepository } from "../../src/modules/users/repositories/UsersRepository"


describe("User Repository", () => {
  let usersRepository: UsersRepository;

  beforeEach(() => {
    usersRepository = UsersRepository.getInstance();
  });

  it("Deve retornar uma lista de user", () => {
    const user = usersRepository.getAll();
    expect(user).toEqual([
      UserBuilder.build(fakeData[0]),
      UserBuilder.build(fakeData[1])
    ]);
  });

  it("Deve criar o user", () => {
    const user = usersRepository.createUser({
      name: "Doctor",
      job: "Time Lord"
    })
    expect(user).toEqual({
      id: 3,
      name: "Doctor",
      job: "Time Lord"
    });
  })

  it("Deve retornar o primeiro user", () => {
    const user = usersRepository.getUserById(1);
    expect(user).toEqual(UserBuilder.build(fakeData[0]));
  });

  it("Deve atualizar o user", () => {
    let user = usersRepository.getUserById(1);
    expect(user).toEqual(UserBuilder.build(fakeData[0]));
    user = usersRepository.updateUser({
      id: 1,
      name: "Doctor",
      job: "Time Lord"
    })
    expect(user).toEqual({
      id: 1,
      name: "Doctor",
      job: "Time Lord"
    });
  });

  it("Deve deletar o usuario", () => {
    let user = usersRepository.getUserById(1);
    expect(user).toEqual(UserBuilder.build(fakeData[0]));
    usersRepository.deleteUser(1)
    user = usersRepository.getUserById(1);
    expect(user).toBe(undefined);
  })
})