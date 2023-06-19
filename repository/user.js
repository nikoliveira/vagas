const data =  require("../fakeData");

const userSearched = []

const getUsers = ( ) => {
    try {
        // manipula o os dados no banco
        return data;
    } catch (error) {
        return undefined;
    }
};

const getOneUser = ( conditions, fromUser ) => {
    // Buscar o usuário com base no nome, id ou job
    const {name, id, job} =  conditions;

    try {
        let user = undefined;
        let position = -1;

        data.forEach((u, idx) => {
            if((name && u.name.toLowerCase().includes(name.toLowerCase())) ||
            (id && u.id.toString() === id) ||
            (job && u.job.toLowerCase().includes(job.toLowerCase()))){
                user = u;
                position = idx;
            }
        })

        if(fromUser){
            if(user){
                userSearched.push({userId: user.id, find: true})
            }
        }

        if (user) {
            return { user, index: position}
        } else {
            throw new Error("Usuário não encontrado");
        }
    } catch (error) {
        return undefined;
    }
};

const createUser = ( body ) => {
    try {
        const {name, job} = body
        const newUser = {
            id: data[data.length-1].id+1,
            name: name,
            job: job,
        }
        // manipula o os dados no banco
        data.push(newUser);
        return newUser;
    } catch (error) {
        return undefined;
    }
};

const deleteUser = ( conditions ) => {
    try {
        const {user, index} = getOneUser(conditions)
        if(user){
            // manipula o os dados no banco
            data.splice(index, 1);
            return true;
        }
    } catch (error) {
        return undefined;
    }
};

const updateUser = ( id, user ) => {
    const { name, job } = user
    try {
        const {user} = getOneUser({id})
        if(user){
            // manipula o os dados no banco
            const userUpdated = data.find(d => d.id.toString() === id);
            userUpdated.name = name;
            userUpdated.job = job;
            return userUpdated;
        }
    } catch (error) {
        return undefined;
    }
};

const timesUserSearched = ( id ) => {
    try {
        const {user} = getOneUser({id})
        let count = 0;
        userSearched.forEach(user =>{
            if(user.userId.toString() === id) count +=1
        })
        return {user, count};
    } catch (error) {
        return undefined;
    }
};


module.exports = {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser,
    timesUserSearched
};