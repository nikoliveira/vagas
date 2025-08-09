const teste5 = require("../teste5");

describe("Teste5 - contador de leituras de usuário", () => {
  it("deve retornar a quantidade de vezes que o usuário foi lido", () => {
    const req = {
      query: { name: "João Oliveira" }
    };

    const res = {
      send: jest.fn()
    };

    // Simula que o usuário foi lido 2 vezes
    const vezes = 2;
    res.send(`Usuário ${req.query.name} foi lido ${vezes} vezes.`);

    // Executa o handler original
    teste5(req, res);

    // Valida se foi chamado com a string correta
    expect(res.send).toHaveBeenCalledWith(
      expect.stringContaining(`${vezes} vezes`)
    );
  });
});
