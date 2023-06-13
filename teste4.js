var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var id =  req.query.id;
    const {name, job } = req.body

    if(!id) {
        throw new Error("Por favor insira um id de usuário após a url, exemplo: ?id=1")
    }

    const reg = data.find(i => i.id == id); // ajuste no parâmetro da função

    if(!reg) {
        throw new Error("Usuário não encontrado")
    }
    
    reg.name = name || reg.name 
    reg.job = job || reg.job

    res.send(reg);
};