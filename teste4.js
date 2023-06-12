const fs = require("fs");
const fakeData = require("./fakeData");

module.exports = function (req, res) {
  const id = req.query.id;
  const reg = fakeData.find((d) => d?.id == id);

  if (reg) {
    fakeData[reg.id - 1].name = req.body.name;
    fakeData[reg.id - 1].job = req.body.job;

    fs.writeFile("fakeData.json", JSON.stringify(fakeData), function (err, _) {
      if (err) return res.send({ msg: "Erro ao editar usuário" });
    });

    return res.send(reg);
  }

  return res.send({ msg: "Usuário não encontrado" });
};
