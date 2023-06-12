const data =  require("./fakeData");

const createUser = (req, res) => {
    const {name, job} =  req.body;
    const newUser = {
        id: data[data.length - 1].id + 1,
        name,
        job,
    }

    data.push(newUser);
    
    return res.status(201).json(newUser);
};

module.exports = {
    createUser
};