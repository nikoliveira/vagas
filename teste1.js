var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    /*
        Um comentário que eu acredito que é bem pertinente é se o nome de usuario em questão é unico ou não. 
        no geral não, e por isso esse método pode retornar mais de um usário contanto que eles possuam o mesmo nome,
        porem acredito que o parâmetro id seja unico, dessa forma caso estivessemos buscando um usuario pelo id teriamos
        uma busca mais eficiente e que retorna apenas o usuario que queremos, para isso poderiamos criar um outro método, 
        getUserById por exemplo ou implementar nesse método o seguinte código:

        var id = req.query.id;
        var name =  req.query.name;

        if (!id && !name) {
            res.status(400).send('Request need to have a id or a name parameter not null on the query!')
        }

        var user = []

        if (id) {
            user = data.find(user => user.id == id)
        } else {
            user = data.filter(user => user.name == name)
        }

        res.send(user)
       
    */

    var name =  req.query.name;

    // Adicionei um erro caso o parametro nome for vazio, afinal sequer faz sentido tentar buscar um usuario sem de fato 
    // ter como buscalo
    if (!name) {
        res.status(400).send('Request need to have a parameter name not null on the query!')
    }
    
    // Troquei o for por um filter, no geral isso não é uma melhora de performance exatamente,
    // porem fica muito mais claro para o desenvolvedor o que não estamos mudando nenhum dos valores
    // e sim somente separando aqueles cujo nome é igual ao da nossa query
    var user = data.filter(user => user.name == name)

    // Esse código abaixo aumenta um contador dentro do usuario caso nos buscarmos por ele (usado no teste 5)
    user.map(d => {
        if (!d.read) {
            d.read = 1
        } else {
            d.read++
        }
    })

    res.send(user)
};

const getUsers = ( req, res, next ) => {
    // Esse código abaixo aumenta um contador dentro de todos os usaurios (usado no teste 5)
    data.map(user => {
        if (!user.read) {
            user.read = 1
        } else {
            user.read++
        }
    })

    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};