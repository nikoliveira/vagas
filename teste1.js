let data = require("./fakeData");

const getUser = async (req, res, next) => {
  let name = req.query.name;

  if (!name) {
    throw console.error("Not Found");
  }

  // o async e await não são realmente necessários nesse caso específico, onde temos uma banco mockado muito pequeno, mas optei por deixa-los para simular o acesso a um banco de dados externo, e pensando também na escalabilidade e manutenção do código. 
  try {
   await data.forEach(function (value) {
      if (value.name === name) {
       return res.status(200).send(value);
      }
    });
   
  } catch (error) {
    res.status(500).send(error.message);
  }

};

const getUsers = async (req, res, next) => {
  
  if(data.length === 0){
     res.status(200).send("No result for this search!");
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
};
