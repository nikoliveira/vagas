var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var id =  req.query.id;

    const reg = data.find((person) => person.id == id);
    reg.name = req.body.name;
    reg.job = req.body.job;

    res.send(reg);

};