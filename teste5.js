var data =  require("./fakeData");

module.exports = function(req, res){
    
    var name =  req.query.name;
    
    const reg = data.find((person) => person.name == name);

    res.send("Usuário " +  name  + `  foi lido ${reg.count} vezes.`);

};