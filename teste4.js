var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var id =  req.query.id;
    var name = req.body.name;
    var job = req.body.job;

    // Erro caso id for nulo
    if (!id) {
        res.status(400).send('Request need to have a parameter id not null on the query!')
    }

    // Caso o nome e o trabalho forem nulos não temos o que atualizar, por isso eu envio um erro
    if (!name && !job) {
        res.status(400).send('Request need to have a name or a job not null on the body!')
    }

    const reg = data.find(d => d.id == id);

    if (!reg) {
        res.status(404).send('user with this id does not exist!')
    }

    // Essa lógica que eu adicionei a seguir faz com que só atualize o nome o trabalho caso os mesmos não sejam nulos
    // mantendo assim os valores ja preenchidos caso a pessoa queria atualizar somente um dos valores
    if (name) {
        reg.name = name;
    }
    if (job) {
        reg.job = job;
    }

    // atualiza o valor com os novos dados
    data[data.indexOf(reg)] = reg

    res.send(reg);

};