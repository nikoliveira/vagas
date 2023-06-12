const fs = require("fs");
const fakeData = require("./fakeData");

module.exports = function (req, res) {
  const id = req.query.id;
  const reg = fakeData.find((d) => d?.id == id);

  if (reg) {
    const MENOS = 1; //Valor usado como subtração no fakeData, pois a key JSON começa com 0.
    fakeData[reg.id - MENOS].name = req.body.name;
    fakeData[reg.id - MENOS].job = req.body.job;

    fs.writeFile("fakeData.json", JSON.stringify(fakeData), function (err, _) {
      if (err) return res.send({ message: "Erro ao editar usuário" });
    });

    return res.send(reg);
  }

  return res.send({ msg: "Usuário não encontrado" });
};
