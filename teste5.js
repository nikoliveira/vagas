var data = require("./fakeData");

module.exports = function(req, res){
    var { name } =  req.query;
    const user = data.find((user) => user.name === name);

    return res.status(200).send(`Usuário ${name} foi lido ${user.views} vezes.`)
};