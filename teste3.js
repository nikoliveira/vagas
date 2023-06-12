var data =  require("./fakeData");

module.exports = function(req, res) {
  
    const name =  req.query.name;
    var message = '';
    var status;

    // Realizo a remoção do usuário pelo nome e entrego o status code '200'.
    // Caso o usuario não exista no banco é exebida uma mensagem de 'usuário não encontrado'
    // com status code correspondente.
    data.forEach((person, indice) => {

        if(name == person.name) {
            data.splice(indice, 1);
            status = 200
            message = 'success'
            return
        }
        status = 404
        message = 'usuário não encontrado'
    });
    
    res.status(status).json(message);

};