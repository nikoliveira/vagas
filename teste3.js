var data =  require("./fakeData");

module.exports = function(req, res) {
    var { name } = req.body;

    const index = data.findIndex(user => user.name === name);

    if (index == -1) return res.status(404).send("User not found.");

    data[index] = null;
    return res.status(200).send("success");
};