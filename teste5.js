const data = require("./fakeData");
const getUserSearchCount = (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Não foi informado nenhum usuário.');
    }

    const user = data.find(user => user.name === name);

    if (!user) {
        return res.status(404).send('Usuário informado não encontrado.');
    }

    const searchCount = user.searchCount || 0;

    res.status(200).send(`O usuário ${name} foi buscado ${searchCount} vezes.`);
};

module.exports = getUserSearchCount;
