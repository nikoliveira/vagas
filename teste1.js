var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var name = req.query.name

    if(!name) {
        res.send("Por favor insira um nome de usuário após a url, exemplo: ?name=João%20Oliveira")
    }

    const result = data.find(i=> i.name.toLowerCase() === name.toLowerCase())

    if(!result) {
        res.send("Nenhum usuário encontrado com este nome")
    }

    result.readCount = result.readCount ? result.readCount + 1 : 1;

    res.send(result)
};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};