// Add permission middleware before teste3 and teste4 in the routes

/**
 * Middleware for checking user permission
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next function to call
 */
const checkPermission = (req, res, next) => {
  // Logic for checking user permission here
  const canDelete = true; // Example: Check if the user has permission to delete
  const canUpdate = true; // Example: Check if the user has permission to update

  req.permission = {
    canDelete,
    canUpdate,
  };

  next();
};

module.exports = checkPermission;
