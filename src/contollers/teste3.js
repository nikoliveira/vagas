var data = require("../data/fakeData");

module.exports = function (req, res) {
    const datafilter = data.filter((item) => item.id != req.query.id);
    data = datafilter
    return res.json({ message: 'usuario deletado ', data });


};