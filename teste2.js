var data =  require("./fakeData");

module.exports = function(req, res){
  
    var name =  req.body.name;
    var job =  req.body.job;

    // Adicionei essa verificação pra caso o corpo da requisição estiver vazio, um erro seja exibido ao invés
    // de adicionar um usuario vazio
    if (!name || !job) {
        res.status(400).send('Body need to have a name and a job!')
    }
    
    // Adicionei o id pois o mesmo será utilizado em outras requisições
    var newUser = {
        id: data.length + 1,
        name: name,
        job: job,
    }

    data.push(newUser)
    
    res.send(newUser);

};