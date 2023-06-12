const permissions = require('./permissions');

// User permissions validation middleware
const validateUserPermissions = (req, res, next) => {
  // Check if the user has permission to create users or if they can delete/update users
  if (req.method === 'POST' || permissions.canDeleteUsers || permissions.canUpdateUsers) {
    next(); // Continue to the next middleware function or route handler
  } else {
    res.status(403).send('Permissão negada'); // Return a "Forbidden" response
  }
};

module.exports = {
  validateUserPermissions,
};
