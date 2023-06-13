const status = require('../status');
const services = require('../services');

/**
 * Verify if user has an feature to acess the route.
 *
 * @param {String} feature
 * @public
 */
module.exports = function hasFeature(feature) {
    return (req, res, next) => {
        try {
            const userId = req.headers['x-user'];
            const user = services.getUserById(userId);

            if(user.features.includes(feature)) return next();

            return res.status(status.UNAUTHORIZED).send('User dont have the feature to access this route.')
        } catch(e) {
            return res.status(status.UNAUTHORIZED).send(e.message)
        }
    }
}