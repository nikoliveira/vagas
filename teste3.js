var data = require("./fakeData");

module.exports = function(req, res) {
  
    const idToDelete = parseInt(req.query.id);

    const initialLength = data.length;
    data = data.filter(user => user.id !== idToDelete);
    const finalLength = data.length;

    if (finalLength < initialLength) {
        res.status(200).send({ message: `Usuário com ID ${idToDelete} excluído com sucesso.` });
    } else {
        res.status(404).send({ message: `Usuário com ID ${idToDelete} não encontrado.` });
    }
};