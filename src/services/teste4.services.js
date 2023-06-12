const data =  require('../mocks/fakeData');

// função atualiza o name e o job do usuário que possuir o Id espeficado.
const updateUser = (id, name, job) => {
    const userIndex = data.findIndex((user) => user.id === Number(id));
    if (userIndex !== -1) {
        data[userIndex].name = name;
        data[userIndex].job = job;
        return true;
    } else {
        return false;
    }
};

module.exports = { updateUser };

// ------ Código base --------
// module.exports =  function(req, res) {
  
//     var id =  req.query.id;

//     const reg = data.find(d => id == id);
//     reg.name = req.body.name;
//     reg.job = req.body.job;

//     res.send(reg);

// };