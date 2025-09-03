const data = require('../../db/fake')

module.exports = function(req, res){
  
    let name =  req.body.name;
    var jov =  req.body.job;
    
    var newUser = {
        name: name,
        job: job,
    }

    data.push(newUser)
    
    res.send(newUser);

};