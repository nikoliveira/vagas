var data =  require("./fakeData");


module.exports = function(req, res){
    
    var name =  req.query.name;

    if(!name) {
        throw new Error("Por favor insira um nome de usuário após a url, exemplo: ?name=João%20Oliveira")
    }

    const user = data.find(i=> i.name.toLowerCase() === name.toLowerCase())

    if(!user) {
        throw new Error("Nenhum usuário encontrado com este nome")
    }

    res.send(`Usuário ${name} foi lido ${user.readCount || 0} vezes.`);

};