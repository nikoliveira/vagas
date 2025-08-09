const deleteUser = require("../teste3")[1]; // [1] pq usamos middleware no índice 0
const fakeData = require("../fakeData");

describe("teste3.js", () => {
  beforeEach(() => {
    fakeData.length = 0;
    fakeData.push({ id: 1, name: "Pedro", job: "Dev" });
  });

  test("Deve deletar usuário existente", () => {
    const req = { query: { name: "Pedro" } };
    const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };

    deleteUser(req, res);
    expect(fakeData).toHaveLength(0);
  });

  test("Deve retornar erro se não encontrar", () => {
    const req = { query: { name: "João" } };
    const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };

    deleteUser(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
