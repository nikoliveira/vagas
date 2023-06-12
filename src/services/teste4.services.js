const data =  require('../mocks/fakeData');

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

// module.exports =  function(req, res) {
  
//     var id =  req.query.id;

//     const reg = data.find(d => id == id);
//     reg.name = req.body.name;
//     reg.job = req.body.job;

//     res.send(reg);

// };