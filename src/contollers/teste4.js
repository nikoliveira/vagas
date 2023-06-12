var data =  require("../data/fakeData");

module.exports =  function(req, res) {
  
    var id =  req.query.id;
    const index = data.findIndex(user => user.id == id);
    if (index !== -1) { // Verifica se o objeto foi encontrado
        // Faz as modificações necessárias no objeto pelo índice
        data[index].name = req.body.name;
        data[index].job = req.body.job;
    }
    res.send(data);

};