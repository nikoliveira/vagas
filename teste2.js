var data =  require("./fakeData");

module.exports = function(req, res){
  
    var {name, job } =  req.body; // erro de digitão na palavra job

    if(!name || !job) {
        throw new Error("Por favor preencher os campos name e job corretamente")
    }
    
    var newUser = {
        id: Date.now(), // criação de um id para manter o padrão já existente
        name: name,
        job: job,
    }

    data = [...data, newUser]   // troca do push pelo uso do spread operator

    res.send(newUser);
};