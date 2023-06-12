var data =  require("./fakeData");

module.exports = function(req, res){
    
    var name =  req.query.name;

    var user = data.find(u.name === name);

    res.send(`Usuário ${user.name} foi lido ${user.count} vezes.`);
    // refatorado send para string template

};
