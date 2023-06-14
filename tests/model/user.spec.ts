import User from "../../src/modules/users/model/users";

describe("User model", () => {
  it("Deve criar a classe", () => {
    const id = 3;
    const name = "Mario";
    const job = "QA tester"

    const user = new User(id, name, job);

    expect(user).toMatchObject({
      name: "Mario",
      job: "QA tester",
      id: 3,
    });
  });
});