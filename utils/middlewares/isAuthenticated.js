const status = require('../status');
const services = require('../services');

module.exports = (req, res, next) => {
    const userId = req.headers['x-user'];

    try{
        const user = services.getUserById(userId);   
        if(!user) throw new Error('User not exists');

        next()
    }catch(e){
        return res.status(status.UNAUTHORIZED).send('User need to be authenticated to acess this route')
    }
}