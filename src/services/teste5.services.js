const { searchUsers } = require('../services/teste1.services');

const getUserSearchCount = (name) => {
    return `O Usuário ${name} foi lido ${searchUsers[name] ? searchUsers[name] : 0} vezes.`;
}

module.exports = { getUserSearchCount };

// module.exports = function(req, res){
    
//     var name =  req.query.name;

//     res.send("Usuário " +  name  + "  foi lido 0 vezes.");

// };