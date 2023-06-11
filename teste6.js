/*
    Nesse teste eu criei um middleware para validar se o usuário pode ou não atualizar e deletar um usuário
    para que o usuario passe nesse método ele terá de mandar através do header das requisições PUT e DELETE
    o token de acesso pelo parâmetro token, alem disso criei um armazenamento desses token (tokensData.js) 
    e um método que criar e retorna esse token através da requisição GET user/token
*/

var data =  require("./fakeData");
var tokensData =  require("./tokensData");

// Método que gera e retorna o token do usuario
const getUserToken = ( req, res, next ) => {
    var id =  req.query.id;

    if (!id) {
        res.status(400).send('Request need to have a parameter id not null on the query!')
    }
    
    var user = data.find(user => user.id == id)

    if (!user) {
        res.status(404).send('Does not exist a user with this given id!')
    }

    var newToken = {
        userId: id,
        token: tokensData.length
    }

    tokensData.push(newToken)

    res.send(`token: ${tokensData.length - 1}`)
};

// Middleware que checa se o token enviado no header existe e vai deletar ou alterar o proprio usuario
const checkAcess = ( req, res, next ) => {
    var token =  req.headers.token;
    var id =  req.query.id;
    var name = req.body.name;

    if (!token) {
        res.status(400).send('Request need to have a parameter token not null on the header!')
    }

    var userToken = tokensData.find(user => user.token == token)

    if (!userToken) {
        res.status(404).send('Does not exist a user token with this given token!')
    }

    var user = data.find(user => user.id == userToken.userId)

    if (!user) {
        res.status(404).send('Does not exist a user with this given id!')
    }

    // Essas condições a seguir fazem a requisição seguir caso o nome ou o id que vai ser atualizado
    // ou deletado forem os mesmos dos do token do usuário 
    if (name && user.name == name) {
        next()
    } else if (id && user.id == id) {
        next()
    } else {
        res.status(401).send('You can not delete or update an user that you do not have acess!')
    }
    
};

module.exports = {
    getUserToken,
    checkAcess
};