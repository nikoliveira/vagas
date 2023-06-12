const data = require("./fakeData");

// Função para obter um usuário pelo nome
const getUser = (req, res, next) => {
    const name = req.query.name;
    
    // Procura o usuário pelo nome no array de dados
    const user = data.find(user => user.name === name);

    if (user) {
        // Se o usuário for encontrado, envia-o como resposta
        res.send(user);
    } else {
        // Se o usuário não for encontrado, retorna um código de status 404
        res.sendStatus(404);
    }
};

// Função para obter todos os usuários
const getUsers = (req, res, next) => {
    // Retorna todos os dados de usuários como resposta
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};
