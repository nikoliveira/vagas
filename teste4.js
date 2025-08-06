var data = require("./fakeData");

module.exports = function(req, res) {
  
    const idToUpdate = parseInt(req.query.id);

    const userIndex = data.findIndex(user => user.id === idToUpdate);

    if (userIndex === -1) {
        return res.status(404).send({ message: `Usuário com ID ${idToUpdate} não encontrado.` });
    }

    const updatedUser = {
        ...data[userIndex],  
        ...req.body         
    };

    data[userIndex] = updatedUser;
    
    res.status(200).send(updatedUser);
};