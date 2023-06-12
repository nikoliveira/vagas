const fakeData = require("./fakeData");

// Poderia ser usado cache local, mas cache local é quebra galho e o fakeData simula um banco de dados.
// Poderia ser usado algum serviço de cache, por exemplo, o Redis. Porém vai além do código original usado no teste. 

module.exports = function (req, res) {
  const id = req.query.id;

  if (!id) {
    return res.send({ message: "Informe um id" });
  }

  const found = fakeData.find((data) => {
    if (data?.id === parseInt(id)) {
      return data;
    }
  });

  if (found)
    res.send("Usuário " + found.name + " foi lido " + found.view + " vezes.");
  else return res.send({ message: "Id não encontrado" });
};
