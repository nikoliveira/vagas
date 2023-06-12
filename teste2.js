var data =  require("./fakeData");

module.exports = function(req, res){
  
    const name =  req.body.name;
    const job =  req.body.job;

    var newUser = {
        id: data.length + 1,
        name: name,
        job: job,
        count: 0,
    }

    data.push(newUser)
    
    res.send(newUser);

};