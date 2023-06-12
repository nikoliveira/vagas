var data = require("./fakeData");

module.exports =  function(req, res) {
    var { id } = req.query;
    const {name, job} = req.body;
    const index = data.findIndex((user) => user.id == id);

    if (index == -1) return res.status(404).send("User not found");

    data[index].name = name
    data[index].job = job

    return res.status(200).json(data[index]);
};