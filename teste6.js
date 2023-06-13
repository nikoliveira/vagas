const data =  require("./fakeData");
const { createToken } = require("./tokenManager");

module.exports = function(req, res){
    const id =  req.params.id;
    
    if(!id) {
        throw new Error("Por favor insira um id de usuário")
    }

    const user = data.find(i=> {
        return i.id == id
    } )

    if(!user) {
        throw new Error("Nenhum usuário encontrado com este id")
    }

    const token = createToken({id})

    res.send({acessToken: token });
};