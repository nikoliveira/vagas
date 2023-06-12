import { MOCKED_USERS } from "../constants";

const getUserPermissions = (id: string) => {


  const userPermissions = MOCKED_USERS.find((item) => {
    return item[id];
  });


  const userExists = !!userPermissions;
  const mappedPermissions = Object.values(userPermissions).flat()
  const canDeleteUser = mappedPermissions.includes("DELETE_USER");
  const canUpdateUser = mappedPermissions.includes("UPDATE_USER");
  return {
    canDeleteUser,
    canUpdateUser,
    userExists,
  };
};

export default getUserPermissions;
