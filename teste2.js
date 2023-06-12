const fs = require("fs");
const data = require("./fakeData");

module.exports = function (req, res) {
  const name = req.body.name;
  const job = req.body.job;

  const id = Object.keys(data).pop();

  const addIndex = 2; //Pula o index 0. Pula o index 1, pois o arquivo original já contém ele.

  const newUser = {
    id: parseInt(id) + addIndex,
    name: name,
    job: job,
    view: 0,
  };

  data.push(newUser);

  fs.writeFile("fakeData.json", JSON.stringify(data), function (err, _) {
    if (err) return res.send({ message: "Erro na criação de usuário" });
  });

  return res.send(newUser);
};
