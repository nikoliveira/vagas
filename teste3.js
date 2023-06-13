var data =  require("./fakeData");

module.exports = function(req, res) {
    const id = req.body.id;
  
    const userId = data.forEach((user) => user.id === id); 
  
    if (userId !== -1) {
      data.splice(userId, 1);
      res.send("success");
    } else {
      res.sendStatus(404);
    }
  };
  