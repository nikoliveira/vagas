const data = require("./fakeData");

module.exports = function (req, res) {
    const name = req.query.name;

    const index = data.findIndex(item => item.name === name);
    if (index !== -1) {
        data.splice(index, 1);
        res.send("Deletado com sucesso 👍🏽!!");
    } else {
        res.send("Ops.. Houve algum erro. Verifique e tente novamente");
    }
}