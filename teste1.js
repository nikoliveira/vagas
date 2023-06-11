const data = require("./fakeData");

const getUser = (req, res, next) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Não foi informado nenhum usuário.');
    }

    const search_user = data.filter(user => user.name.includes(name));

    if (search_user.length > 0) {
        res.status(200).send(search_user);
    } else {
        res.status(404).send('Usuário informado não encontrado.');
    }
};


const getUsers = (req, res, next) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};