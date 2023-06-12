var data =  require("./fakeData");

module.exports = function(req, res, next) {
  
    var name =  req.query.name;

    // for(let i = 0; i < data.length;  i++) {
    //     if(i.name == name) {
    //         data[i] = null;
    //     }
    // }

    var userDeleted = data.find(u => u.name === name);
    var userDeletedIndex = data.indexOf(userDeleted);
    
    if (userDeleted < 0) {
        throw new Error('User not found.');
    };

    data.splice(userDeletedIndex, 1);

    res.send("success");

};