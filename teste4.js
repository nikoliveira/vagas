let data = require("./src/fakeData");

const update = (req, res) => {
  
  const idUser = req.body.id
  const upUser = req.body


  const result = data.findIndex( element  => element.id == idUser)

  if(result === -1){

    return res.status(404).json({message: "User not found"})
  }

  const user = data[result];
 
  if(user.adm === true || user.id === idUser){
    
    newUser = {
      ...user,
      ...upUser
    }
    return res.status(200).json(newUser)
  }
    
  return res.status(403).json({message: "missing admin permissions"})
 

};


module.exports = {
  update
};
