const data = require("./fakeData");

// Função para criar um novo usuário
module.exports = function(req, res) {
    const name = req.body.name;
    const job = req.body.job;

    // Cria um novo objeto de usuário com os dados fornecidos
    const newUser = {
        name: name,
        job: job,
    };

    // Adiciona o novo usuário ao array de dados
    data.push(newUser);
    
    // Retorna o novo usuário como resposta
    res.send(newUser);
};
