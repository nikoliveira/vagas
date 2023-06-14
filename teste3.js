var data =  require("./fakeData");

module.exports = function(req, res) {
  /*
  A exclusão será feita pelo id,
  garantindo que o elemento correto está sendo excluído
  */
    
    const id = req.query.id;
    if (!id) return res.status(400).send({ 'message': 'Necessário passar o id do usuário.' });
    if (data.length < 1) return res.status(500).send({ 'message': 'Não existem usuários cadastrados na base de dados.' });

    for (user of data) {
        if (Number(user.id) === Number(id)) {
            data[Number(user.id) - 1] = null;
            return res.status(200).send({ 'message': 'Usuário excluído com sucesso.', 'data': data[Number(user.id) - 1] });
        }
    }
    res.status(500).send({ 'message': 'Usuário não existe na base de dados.' });
};