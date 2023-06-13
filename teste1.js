let data = require("./fakeData");
let userAccess = 0;


const getUser = async (req, res, next) => {
  let { name } = req.query;

  if (!name) {
    res.status(404).send("Not Found");
  }

  // o async e await não são realmente necessários nesse caso específico, onde temos uma banco mockado muito pequeno, mas optei por deixa-los para simular o acesso a um banco de dados externo, e pensando também na escalabilidade e manutenção do código. 
  try {
   await data.forEach(function (value) {
      if (value.name === name) {
      userAccess+= 1;
      return res.status(200).send(value);
      }
    });
   
  } catch (error) {
    res.status(500).send(error.message);
  }

};

const getUserAccess = () => {
  return userAccess; // retorna o valor atualizado de userAccess
};

const getUsers = async (req, res, next) => {
  
  if(data.length === 0){
     res.status(200).send("No results for this search");
  }
  
  try {
    const result = await data;
    res.status(200).send(result);

  } catch (error) {
    res.status(500).send(error.message);
  }
 
  if (data.length === 0) {
    throw console.error("Not Found");
  }

};

module.exports = {
  getUser,
  getUsers,
  getUserAccess
};
