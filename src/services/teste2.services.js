const data =  require("../mocks/fakeData");

// função cria um novo usuário no banco de dados incrimentando o id em 1 levando em conta o ultimo id da lista.
const createUser = (name, job) => {
    const newUser = {
        id: data[data.length - 1].id + 1,
        name,
        job,
    };

    data.push(newUser);
    return true;
};

module.exports = { createUser };

// ------ Código base --------
// module.exports = function(req, res){
  
//     var name =  req.body.name;
//     var jov =  req.body.job;
    
//     var newUser = {
//         name: name,
//         job: job,
//     }

//     data.push(newUser)
    
//     res.send(newUser);

// };