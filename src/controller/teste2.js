import data from "./fakeData"

module.exports = function(req, res, next) {
    const name = req.body.name;
    const job = req.body.job;
    
    const newUser = {
        name: name,
        job: job,
    };

    data.push(newUser);
    
    res.send(newUser);
};
