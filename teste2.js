var data =  require("./fakeData");
// intenção do código: cadastrar um usuário no banco de dados com a informação(body) 'name' e 'job' (nome e profissão/cargo)
module.exports = function(req, res){
  
    var name = req.body.name;
    // var jov =  req.body.job;
    var job = req.body.job;
    // variável estava com o nome errado.
    
    var newUser = {
        name,
        job
    };
    //aqui refatorei pois quando a variável possui o mesmo nome que a propriedade do objeto nao precisa ser repetido.
    //ex: 'name: name' pode ser só 'name'.

    data.push(newUser);
    
    res.send(newUser);

};