const updateUser = require("../teste4")[1];
const fakeData = require("../fakeData");

describe("teste4.js", () => {
  beforeEach(() => {
    fakeData.length = 0;
    fakeData.push({ id: 1, name: "Carlos", job: "Dev" });
  });

  test("Deve atualizar nome e job", () => {
    const req = { query: { id: 1 }, body: { name: "Carlos Silva", job: "Senior Dev" } };
    const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };

    updateUser(req, res);
    expect(fakeData[0].name).toBe("Carlos Silva");
    expect(fakeData[0].job).toBe("Senior Dev");
  });

  test("Deve retornar erro se não encontrar", () => {
    const req = { query: { id: 999 }, body: { name: "X" } };
    const res = { send: jest.fn(), status: jest.fn().mockReturnThis() };

    updateUser(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
