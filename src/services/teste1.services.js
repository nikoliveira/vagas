const data =  require('../mocks/fakeData');

const getUser = (name) => {
    const user = data.filter((element) => element.name === name);
    return user;
}

const getUsers = () => {
    return data;
}

// const getUser = ( req, res, next ) => {
    
//     var name =  req.query.name;

//     for(let i = 0; i < data.length;  i++) {
//         if(i.name == name) {
//             res.send(data[i]);
//         }
//     }

// };

// const getUsers = ( req, res, next ) => {
    
//     res.send(data);
    
// };

module.exports = {
    getUser,
    getUsers
};