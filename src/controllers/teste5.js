const db = require("../database/db.json").users;

const getUserCount = (req, res) => {
    const { id } = req.params
    const user = db.find(user => user.id === parseInt(id));

    //Como o banco de dados não está salvando a quantidade de requisições na rota do teste 1, o resultado sempre virá 0
    //Porém ao utilizar a rota do teste 1 o contador sempre aumentará
    if (user) {
        return res.json({ name: user.name, count: user.contador });
    } else {
        return res.status(404).json({ error: 'Usuário não encontrado', });
    }
};

module.exports = {
    getUserCount
};
