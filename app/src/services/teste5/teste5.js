const data = require("../../db/fake");

module.exports = function(req, res){
    
    var name =  req.query.name;

    res.send("Usuário " +  name  + "  foi lido 0 vezes.");

};