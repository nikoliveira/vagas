const PERMS = {
  UPDATE_USER: "updateUser",
  DELETE_USER: "deleteUser",
};

const usersPermissions = {
  1: [PERMS.UPDATE_USER],
  2: [PERMS.DELETE_USER, PERMS.UPDATE_USER],
};

module.exports = { usersPermissions, PERMS };
