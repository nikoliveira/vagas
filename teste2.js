const data =  require("./fakeData");

module.exports = function(req, res){
  
    const name =  req.body.name;
    const job =  req.body.job;
    
    const newUser = {
        id: data.length + 1,
        name: name,
        job: job,
        counter: 0,
    }

    if (!name || !job) {
        return res.status(400).send("Dados inválidos");
    }

    data.push(newUser)
    
    res.status(201).send(newUser);

};