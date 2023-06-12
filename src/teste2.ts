var data =  require("../fakeData");

export default function(req, res){
  
    var name =  req.body.name;
    var jov =  req.body.job;
    
    var newUser = {
        name: name,
        job: job,
    }

    data.push(newUser)
    
    res.send(newUser);
};