var data =  require("./fakeData");

module.exports = function(req, res){
    
    var name =  req.query.name;

    // Adicionei novamente um erro caso o parametro nome for vazio
    if (!name) {
        res.status(400).send('Request need to have a parameter name not null on the query!')
    }
    
    var user = data.filter(user => user.name == name)

    // Caso não exista um usuário com esse nome mandamos um erro
    if (!user) {
        res.status(404).send('Does not found a user with this name!')
    }

    var result = '';

    user.map(u => {
        // Caso não exista um valor read dentro do usuario o criamos com o valor 0
        if (!u.read) {
            u.read = 0
        }

        result += `Usuário ${u.name} foi ${u.read} lido vezes. \n`;
    })
    
    res.send(result)

    /*
        Vale comentar que toda a minha lógica foi feita pensando em exibir o acesso pelo nome que como
        já comentei não é nescessariamente unico.
    */
};