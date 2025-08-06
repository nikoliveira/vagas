var data = require("./fakeData");

const accessCount = {};

const getUser = (req, res, next) => {
    const id = parseInt(req.query.id);
    
    const user = data.find(user => user.id === id);

    if (user) {
        accessCount[user.id] = (accessCount[user.id] || 0) + 1;

        res.status(200).send(user);
    } else {
        res.status(404).send({ message: "Usuário não encontrado." });
    }
};

const getUsers = (req, res, next) => {
    res.status(200).send(data);
};

const getAccessCount = (req, res) => {
    res.status(200).send(accessCount);
};

module.exports = {
    getUser,
    getUsers,
    getAccessCount
};