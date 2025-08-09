const { getUser, getUsers, readCount } = require("../teste1");
const fakeData = require("../fakeData");

describe("teste1.js", () => {
  beforeEach(() => {
    fakeData.length = 0; // limpa
    fakeData.push({ id: 1, name: "João Oliveira", job: "Desenvolvedor" });
    for (let key in readCount) delete readCount[key]; // limpa contador
  });

  test("Deve retornar usuário pelo nome", () => {
    const req = { query: { name: "João Oliveira" } };
    const res = { send: jest.fn() };

    getUser(req, res);
    expect(res.send).toHaveBeenCalledWith(fakeData[0]);
  });

  test("Deve retornar todos os usuários", () => {
    const req = {};
    const res = { send: jest.fn() };

    getUsers(req, res);
    expect(res.send).toHaveBeenCalledWith(fakeData);
  });

  test("Deve incrementar contador de leitura", () => {
    const req = { query: { name: "João Oliveira" } };
    const res = { send: jest.fn() };

    getUser(req, res);
    getUser(req, res);

    expect(readCount["joão oliveira"]).toBe(2);
  });
});
