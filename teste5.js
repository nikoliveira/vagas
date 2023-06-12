const fakeData = require("./fakeData");

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
