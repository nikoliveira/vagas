var data =  require("./fakeData");

module.exports = function(req, res){
  
    const {name, job} = req.body
   
    const newUser = {
        id: data[data.length-1].id+1,
        name: name,
        job: job,
    }

    try {
        data.push(newUser)
        res.send(newUser);
    } catch (error) {
        res.status(404).send("Erro ao adicionar usuário");
    }
    

};