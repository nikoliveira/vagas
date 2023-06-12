var data = require("../data/fakeData");

const getUser = (req, res) => {
    const name = req.query.name;
    if (!name) return res.status(404).json({ error: 'Parametro invalido' });

    const user = data.findIndex(user => user.name == name); //achando usario pelo nome e retornando o index

    if (user !== -1) {
        data[user].contAcess = data[user].contAcess + 1; // fazendo contagem de buscar pelo usuario x
        res.send(data[user])
    } else {
        return res.status(404).json({ error: 'Usuario nao encontrado' });
    }
};

const getUsers = (req, res) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};