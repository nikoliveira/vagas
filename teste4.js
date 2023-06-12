var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var id =  req.query.id;
    const {name, job } = req.body

    if(!id) {
        res.send("Por favor insira um id de usuário após a url, exemplo: ?id=1")
    }

    const reg = data.find(i => i.id == id); // ajuste no parâmetro da função

    reg.name = name || reg.name 
    reg.job = job || reg.job

    console.log(data)
    res.send(reg);

};