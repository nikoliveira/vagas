const data = require("./fakeData");

// Função para atualizar os dados de um usuário específico
module.exports = function(req, res) {
    const id = req.query.id;

    // Procura o usuário pelo ID no array de dados
    const user = data.find(user => user.id == id);

    if (user) {
        // Atualiza os campos de nome e cargo do usuário com os valores fornecidos no corpo da solicitação
        user.name = req.body.name;
        user.job = req.body.job;
        
        // Retorna o usuário atualizado como resposta
        res.send(user);
    } else {
        // Se o usuário não for encontrado, retorna um código de status 404 e a mensagem "User not found"
        res.status(404).send("User not found");
    }
};
