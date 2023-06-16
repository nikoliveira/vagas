let data = require("./src/fakeData");

const deleteUser = (req, res) => {
  const idUser = req.body.id

  const result = data.findIndex( element  => element.id == idUser)

  if(result === -1){

    return res.status(404).json({message: "User not found"})
  }

  const user = data[result];


  if(user.adm === true || user.id === idUser){
      
    data.splice(result, 1)
    
    return res.status(204).json()
    
  }

  return res.status(403).json({message: "missing admin permissions"})
  

};


module.exports = {
  deleteUser
};
