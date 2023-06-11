const data = require("./fakeData");

const getUser = (req, res, next) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Não foi informado nenhum usuário.');
    }

    let searchUser = data.filter(user => user.name.includes(name));

    if (searchUser.length > 0) {
        res.status(200).send(searchUser);
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