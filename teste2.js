const fs = require("fs");
const data = require("./fakeData");

module.exports = function (req, res) {
  const name = req.body.name;
  const job = req.body.job;

  const id = Object.keys(data).pop();

  const ADD = 2; //Pula o id 0 e pula o id 1, pois o arquivo original fakeData já começa no id:1.

  const newUser = {
    id: parseInt(id) + ADD,
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
