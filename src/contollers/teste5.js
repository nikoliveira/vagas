var data = require("../data/fakeData");


module.exports = function(req, res){
    
    try {
        const name = req.query.name;
        if (!name)  res.status(404).json({ error: 'Parametro invalido' });
        const user = data.findIndex(user => user.name == name); //achando usario pelo nome e retornando o index
        if (user !== -1) {
             res.status(200).json(data[user])
        } else {
             res.status(404).json({ error: 'Usuario nao encontrado' });
        }
    } catch (e) {
        res.status(404).json({ error: 'Erro ao buscar usuario' });
    }
};