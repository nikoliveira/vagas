var data =  require("./fakeData");

module.exports = function(req, res){
  
    var name =  req.body.name;
    var job = req.body.job;
    
    if (!name || !job) return res.status(400).send(
        { "message": "Insira o nome e o trabalho do usuário." })
    
    var newUser = {
        name: name,
        job: job,
    }

    data.push(newUser)
    res.status(200).send(newUser);

};