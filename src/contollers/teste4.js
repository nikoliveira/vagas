var data =  require("../data/fakeData");

module.exports =  function(req, res) {
  try{
    var id =  req.query.id;
    const index = data.findIndex(user => user.id == id);
    if (index !== -1) { // Verifica se o objeto foi encontrado
        // Faz as modificações necessárias no objeto pelo índice
        data[index].name = req.body.name;
        data[index].job = req.body.job;
    }
    res.status(200).send(data);
  }catch(e){
    res.status(404).json({ error: 'Error ao atualizar usuario' });
  }
    

};