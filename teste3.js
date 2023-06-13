const data = require("./fakeData");

// Função para buscar e excluir um usuário
module.exports = function(req, res) {
    const name = req.query.name;

    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            // Remove o usuário correspondente do array
            data.splice(i, 1);
            
            // Retorna sucesso como resposta
            res.send("success");
            
            // Encerra a função após excluir o usuário
            return;
        }
    }

    // Se nenhum usuário correspondente for encontrado, retorna um erro
    res.status(404).send("User not found");
};
