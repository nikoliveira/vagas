const data =  require("../mocks/fakeData");

const createUser = (name, job) => {
    const newUser = {
        id: data[data.length - 1].id + 1,
        name: name,
        job: job,
    };

    data.push(newUser);
    return true;
};

module.exports = { createUser };

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