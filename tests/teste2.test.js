const createUser = require("../teste2");
const fakeData = require("../fakeData");

describe("teste2.js", () => {
  beforeEach(() => {
    fakeData.length = 0;
  });

  test("Deve criar novo usuário", () => {
    const req = { body: { name: "Maria", job: "Designer" } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    createUser(req, res);
    expect(fakeData).toHaveLength(1);
    expect(fakeData[0].name).toBe("Maria");
  });

  test("Deve retornar erro se faltar campos", () => {
    const req = { body: { name: "" } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});
