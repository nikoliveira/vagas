var data =  require("./fakeData");

module.exports =  function(req, res) {
  
    var id = req.query.id;
    const nameUser = req.body.name;
    const jobUser = req.body.job;

    if (!id) return res.status(400).send({ 'message': 'Necessário passar o id do usuário.' });
    if(!nameUser && !jobUser) return res.status(400).send({'message':'Necessário passar o dado que deseja ser alterado(nome e/ou trabalho)'})

    for (user of data) {
        if (Number(user.id) === Number(id)) {
            data[Number(user.id) - 1] = {
                name: nameUser,
                job: jobUser
            }
            return res.status(200).send({'message':'Usuário atualizado com sucesso.', 'data':data[Number(user.id) - 1]})
        }
    }
    res.status(400).send({'message':'Usuário não encontrado na base de dados.'})

};