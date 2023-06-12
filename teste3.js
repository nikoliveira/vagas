const fs = require("fs");
const fakeData = require("./fakeData");

module.exports = function (req, res) {
  const name = req.query.name;

  fakeData.find((data, index) => {
    if (data?.name === name) {
      delete fakeData[index];

      fs.writeFile(
        "fakeData.json",
        JSON.stringify(fakeData),
        function (err, _) {
          if (err) return res.send({ message: "Erro ao deletar usuário" });
        }
      );
      return true;
    }
  });

  return res.send("sucesso");
};
