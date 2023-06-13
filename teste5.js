const data = require("./fakeData");

module.exports = function (req, res) {
  try {
    const name = req.query.name;

    const userCount = data.filter((user) => user.name === name).length;
    res.send(`Usuário ${name} foi lido ${userCount} vezes.`);
  } catch (error) {
    res.sendStatus(500);
  }
};