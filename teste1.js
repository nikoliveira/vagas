const fs = require("fs");
const fakeData = require("./fakeData");

const getUser = (req, res, _) => {
  const name = req.query.name;
  if (!name) {
    return res.send({ message: "Informe um usuário" });
  }

  const found = fakeData.find((data) => {
    if (data?.name === name) {

      const MENOS = 1; //Valor usado como subtração no fakeData, pois a key JSON começa com 0.
      fakeData[data.id - MENOS].view = fakeData[data.id - 1].view + 1; //Adiciona mais uma visualização.

      fs.writeFile(
        "fakeData.json",
        JSON.stringify(fakeData),
        function (err, _) {
          if (err) return res.send({ message: "Erro ao editar views de usuário" });
        }
      );

      return data;
    }
  });

  if (found) return res.send(found);
  else return res.send({ message: "Usuário não encontrado" });
};

const getUsers = (_, res) => {
  return res.send(fakeData);
};

module.exports = {
  getUser,
  getUsers,
};
