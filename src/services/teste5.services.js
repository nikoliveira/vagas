const { searchUsers } = require('../services/teste1.services'); // objeto do teste1 que possui o número de buscas de cada usuário.

// função retorna uma string com o nome e o número de vezes que o usuário foi lido.
const getUserSearchCount = (name) => {
    return `O Usuário ${name} foi lido ${searchUsers[name] ? searchUsers[name] : 0} vezes.`;
}

module.exports = { getUserSearchCount };

// ------ Código base --------
// module.exports = function(req, res){
    
//     var name =  req.query.name;

//     res.send("Usuário " +  name  + "  foi lido 0 vezes.");

// };