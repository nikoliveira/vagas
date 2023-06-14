var data =  require("./fakeData");
var tools = require('./tools');



const getUserById = (req, res, next) => {
    //buscar pelo id garantindo que o usuario sendo retornado
    //e exatamente o que foi buscado
    
    const id = req.query.id;

    if (!id) return res.status(400).send({ 'message': 'Insira o id do usuário.' });
 
    const user = data.find(element => { return Number(element.id) === Number(id) });

    if (data.length < 1 || !user) return res.status(200).send({ 'message': 'Usuário não encontrado.' });
    
    res.status(200).send({ 'message': 'Usuário encontrado com sucesso.', 'data':user });
}

const getUser = ( req, res, next ) => {
    //A busca de usuário por nome poderá trazer mais de um item
    //nesse caso será retornado o primeiro item que possuir o nome 
    //do usuario
    var name = req.query.name;
    if (!name) return res.status(400).send({ 'message': 'Insira o nome do usuário.' });
    
    if (data.length < 1) return res.status(200).send([]);
    //let searchUsers = [];
    for (let user of data) {
         if (tools.removeAccent(user.name).toLowerCase().includes(name.toLowerCase())) {
            //searchUsers.push(user);
             data[Number(user.id) - 1] = {
                 ...user,
                 numberOfTimeReturned: user.numberOfTimeReturned?user.numberOfTimeReturned+1:1,
             }
             return res.status(200).send({ 'message': 'Usuário encontrado com sucesso.', 'data': { id: user.id, name: user.name, job: user.job } });

        }
    }
    res.status(200).send({ 'message': 'Nenhum usuário encontrado com esse nome.', 'data': {}});
};

const getUsers = ( req, res, next ) => {
    if (data.length < 1) return res.status(200).send({ 'message': 'Nenhum usuário cadastrado na base de dados.', 'data': [] });
    res.status(200).send({ 'message': 'Todos os usuários cadastrados.','data':data });
};

module.exports = {
    getUser,
    getUsers,
    getUserById
};