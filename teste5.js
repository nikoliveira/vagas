
let data = require("./src/fakeData");


const listUser = (req, res) => {
    
    let idUser =  req.params.id;

    const result = data.find( element  => element.id == idUser)

    return res.status(200).json({messsage:`Usuário ${result.name} foi lido ${result.n} vezes.`})

};


module.exports = {
    listUser
  };
