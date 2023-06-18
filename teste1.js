const data = require("./fakeData");

const getUser = (req, res, next) => {
    const name = req.query.name;
    const user = data.find((item) => item.name === name);

    if (user) {
        res.send(user);
    } else {
        res.send("Desculpe...😥 O Usuário não foi encontrado!");
    }
};

const getUsers = (req, res, next) => {
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};