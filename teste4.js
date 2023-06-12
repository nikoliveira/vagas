var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var id =  req.query.id;
    // eu mudaria de query para path param, é obrigatório o usuário passar um id 
    // para modificar determinado usuário e ficaria mais de acordo com a padronização REST.
    // var id = req.params.id;


    //const reg = data.find(d => id == id);
    const reg = data.find(d => d.id === id);
    // faltava um d.id
    reg.name = req.body.name;
    reg.job = req.body.job;

    res.send(reg);

};