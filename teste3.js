var data =  require("./fakeData");

module.exports = function(req, res) {
    /*
        Mais uma vez acho pertinente comentar como o nome não é nescessariamente unico, 
        dessa forma podemos querer deletar todos os usuarios com o mesmo nome, ou então deletar 
        apenas o primeiro usuario que acharmos com aquele nome utilizando:
        
        var user = data.find(user => user.name == name)
        data.splice(data.indexOf(user), 1)

        Já para garantirmos que iremos deletar o usuário correto devemos utilizar uma informação unica,
        como é o caso do id, e o código de deletar um usuário pelo seu id seria:

        var id =  req.query.id;

        if (!id) {
            res.status(400).send('Request need to have a parameter id not null on the query!')
        }

        var user = data.find(user => user.id == id)
        
        if (!user) {
            res.status(404).send('user with this id does not exist!')
        }
        
        data.splice(data.indexOf(user), 1)

        res.send("success");

    */
    var name =  req.query.name;

    // Adicionei novamente um erro caso o parametro nome for vazio
    if (!name) {
        res.status(400).send('Request need to have a parameter name not null on the query!')
    }

    // Troquei o for por um filter novamente porque acredito que fica mais claro de entender o que estamos fazendo
    data = data.filter(user => user.name !== name)

    res.send("success");

};