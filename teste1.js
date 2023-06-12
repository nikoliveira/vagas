var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    // Estou utilizando const em vez de var
    // para evitar vazamentos de escopo.
    const name =  req.query.name; 
    
    // Buscando o usuario por nome na base fake.
    const result = data.find((person) => {
        if (person.name == name) {
            return person
        }
    });

    // Caso não seja encontrado é exibida uma mensagem para o usuario.
    if(!result) {
        return res.status(404).json({ message: 'Pessoa não encontrada.' });
    }
    return res.send(result)

};

const getUsers = ( req, res, next ) => {
    
    res.send(data);
    
};

module.exports = {
    getUser,
    getUsers
};