var data = require("./fakeData");
var tools = require('./tools');


module.exports = function (req, res) {
    
    var name = req.query.name;
    if (!name) return res.status(400).send({ 'message': 'Insira o nome do usuário.' });
    
    for (let user of data) {
        if (tools.removeAccent(user.name).toLowerCase().includes(name.toLowerCase())) {
            return res.status(200).send({ 'message': `Usuário ${user.name} foi lido ${user.numberOfTimeReturned? user.numberOfTimeReturned : 0} vezes.` });
        }
    }
    res.status(200).send({ 'message': 'Nenhum usuário encontrado com esse nome na base de dados.'});
};