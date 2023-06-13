let data = require("./fakeData");

module.exports = function async (req, res) {
  let { id } = req.query;
  let { name, job } = req.body;

  if(!id){
    res.send("Id not found");
  }

  if(!name || !job){
    res.send("Name and job must be filled");
  }

  let newData =  { id: id, ...req.body };

  try {
    let filteredById = data.filter((value) => value.id === Number(id));

    //procuro o index do registro filtrado para fazer a atualização baseada no index.
    let indexOfFilteredData = data.indexOf(filteredById[0]);
    

    if(filteredById.length === 0){
        res.status(404).send("Id not found");
    }

    let updatedRegister = data[indexOfFilteredData] = newData;


    res.status(200).send(updatedRegister)

  } catch (error) {
    res.status(500).send(error.message);
  }


};
