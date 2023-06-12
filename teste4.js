const data = require("./fakeData");

const updateUser = (req, res) => {
    const id = Number(req.query.id);
    const name = req.body.name;
    const job = req.body.job;

    if (!id) {
        return res.status(400).send('Não foi informado nenhum ID.');
    }

    const searchUser = data.find((user) => user.id === id);

    if (!searchUser) {
        return res.status(404).send('Usuário informado não encontrado.');
    }

    if (!name && !job) {
        return res.status(400).send('É necessário informar pelo menos uma propriedade.');
    }

    if (name) {
        searchUser.name = name;
    }

    if (job) {
        searchUser.job = job;
    }

    res.status(200).send(searchUser);
};

module.exports = updateUser;