const data =  require("./fakeData");

const getUser = ( req, res, _next ) => {
    // Pega o parâmetro "name" da query da requisição
    const name =  req.query.name;
    // Busca o usuário pelo nome usando o método find
    const user = data.find((item) => item.name === name);

    // Verifica se o usuário foi encontrado
    if (user) {
        // Se encontrado, envia o usuário como resposta
        res.send(user);
    } else {
        // Se não encontrado, envia uma resposta com status 404 e uma mensagem de erro
        res.status(404).send({ error: "Usuário não encontrado" })
    }

};

const getUsers = ( _req, res, _next ) => {
    // Envia todos os dados como resposta
    res.send(data);
};

module.exports = {
    getUser,
    getUsers
};