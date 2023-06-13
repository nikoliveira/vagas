const data = require("./fakeData");

// Função para retornar o número de vezes que um determinado usuário foi lido no teste1
module.exports = function(req, res) {
    const name = req.query.name;

    let count = 0;

    // Percorre o array de dados e conta quantas vezes o nome do usuário aparece
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            count++;
        }
    }

    // Retorna uma mensagem com o nome do usuário e a contagem de vezes que ele foi lido
    res.send("Usuário " + name + " foi lido " + count + " vezes.");
};
