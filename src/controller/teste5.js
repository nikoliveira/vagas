

module.exports = function(req, res){
    
    const name =  req.query.name;

    res.send("Usuário " +  name  + "  foi lido 0 vezes.");

};