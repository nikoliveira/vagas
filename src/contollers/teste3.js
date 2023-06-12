var data = require("../data/fakeData");

module.exports = function (req, res) {
    try {
        const datafilter = data.filter((item) => item.id != req.query.id);
        res.status(200).json({ message: 'usuario deletado ', datafilter });
    } catch (e) {
        res.status(404).json({ error: 'Error ao deletar usuario' });

    }

};