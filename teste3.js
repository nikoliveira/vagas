var data =  require("./fakeData");

module.exports = function(req, res) {
  
    var name =  req.query.name;

    if(!name) {
        throw new Error("Por favor insira um nome de usuário após a url, exemplo: ?name=João%20Oliveira")
    }

    const indexToRemove = data.findIndex(i=> i.name.toLowerCase() === name.toLowerCase())

    if(indexToRemove === -1) {
        throw new Error("Este usuário não existe no banco")
    }

    data.splice(indexToRemove, 1)
    
    res.send("Usuário removido");
};