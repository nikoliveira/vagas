const data = require("./fakeData");

const deleteUser = (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).send('Não foi informado nenhum usuário.');
    }

    const userIndex = data.findIndex(user => user.name.includes(name));

    if (userIndex === -1) {
        res.status(404).send('Usuário informado não encontrado.');
    } else {
        data.splice(userIndex, 1);
        res.status(200).send('sucesso');
    }
};

module.exports = deleteUser;