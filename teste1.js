const fs = require("fs");
const fakeData = require("./fakeData");

const getUser = (req, res, _) => {
  const name = req.query.name;
  if (!req.query.name) {
    return res.send({ message: "Informe um usuário" });
  }

  const found = fakeData.find((data) => {
    if (data?.name === name) {
      fakeData[data.id - 1].view = fakeData[data.id - 1].view + 1;

      fs.writeFile(
        "fakeData.json",
        JSON.stringify(fakeData),
        function (err, _) {
          if (err) return res.send({ msg: "Erro ao editar views de usuário" });
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
