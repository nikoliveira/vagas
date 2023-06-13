let data = require("./fakeData");

function deleteUser(index) {
  return data.splice(index, 1);
}

module.exports = async function (req, res) {
  let { name } = req.query;

  if (!name) throw console.error("User not found");
  let userDeteled = false;

  try {
    await data.map((value) => {
      if (value.name === name) {
        let indexOfValue = data.indexOf(value);
        deleteUser(indexOfValue);
        userDeteled = true;
        res.status(200).send("Success");
      }
    });
    if(!userDeteled) await res.status(404).send("User not found");
       
  } catch (error) {
    res.status(500).send(error.message);
  }
};
