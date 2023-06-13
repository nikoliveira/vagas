const { getUsers } = require("./teste1");

module.exports = function(req, res){

    const users = getUsers();
    
    const { name } =  req.query;

    const filteredUsers = users.filter((eachUser) => eachUser.name === name);

    const qntRead = filteredUsers.length;

    res.status(200).json({ message: `Usuário ${name} foi lido ${qntRead} vezes.`});

};