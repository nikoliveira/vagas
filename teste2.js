let data = require("./src/fakeData");

const updateUser = (req, res) => {

  let newName = req.body.name;
  let newJob = req.body.job;
  

  let newUser = {
    id: data.length +1,
    name: newName,
    job: newJob,
  };

  data.push(newUser);
  
  return res.status(200).json(newUser)
};



module.exports = {
  updateUser
};
