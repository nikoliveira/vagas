let data = require("./src/fakeData");

// Para uma busca mais precisa, resolvi procurar por id no banco de dados, com metodo find para deixar o código mais performatico. 

const getUser = (req, res, next) => {
  let idUser = req.params.id;

  const result = data.find( element  => element.id == idUser)

  if(result){
    
    result.n = result.n + 1
    return res.status(200).json(result)
  }
  return res.status(404).json({message: "User not found"})
};



const getUsers = (req, res, next) => {

  res.status(200).json(data)
};

module.exports = {
  getUser,
  getUsers,
};
