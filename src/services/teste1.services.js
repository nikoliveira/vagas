const data =  require('../mocks/fakeData');
const searchUsers = {}; // objeto onde será guardado o nome do usuário e o número de vezes em que ele foi buscado.

// realiza a busca no banco de dados pelo usuário via name e atualiza a sua contagem de buscas.
const getUser = (name) => {
    const user = data.filter((element) => element.name === name);
    if (user) {
        if (searchUsers[name]) {
            searchUsers[name]++
        } else {
            searchUsers[name] = 1;
        }
    }
    return user;
}

// busca por todos os usuários.
const getUsers = () => {
    return data;
}


// ------ Código base --------
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
    getUsers,
    searchUsers
};