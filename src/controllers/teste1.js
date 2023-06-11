const db = require("../database/db.json").users;

const getUser = (req, res) => {
    const { name } = req.body
    const user = db.find(user => user.name === name);
    if (user) {
        user.contador = (user.contador || 0) + 1;
        return res.json(user);
    } else {
        return res.status(404).json({ error: 'Usuário não encontrado' });
    }
};

module.exports = {
    getUser
};
