const data = require("./fakeData");

module.exports = function (req, res) {
    const id = req.query.id;

    const reg = data.find(d => d.id == id);
    if (reg) {
        reg.name = req.body.name;
        reg.job = req.body.job;
        res.send(reg);
    } else {
        res.status(404).send("Registro não encontrado");
    }
};