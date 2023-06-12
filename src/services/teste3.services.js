const data =  require('../mocks/fakeData');

const deleteUser = (name) => {
    const userIndex = data.findIndex((user) => user.name === name);
    if (userIndex !== -1) {
        data.splice(userIndex, 1);
        return true;
    } else {
        return false;
    }
};

module.exports = { deleteUser };

// module.exports = function(req, res) {
  
//     var name =  req.query.name;

//     for(let i = 0; i < data.length;  i++) {
//         if(i.name == name) {
//             data[i] = null;
//         }
//     }

//     res.send("success");

// };