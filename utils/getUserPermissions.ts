import { MOCKED_USERS } from "../constants";

const getUserPermissions = (id: string) => {


  const userPermissions = MOCKED_USERS.find((item) => {
    return item[id];
  });


  const userExists = !!userPermissions;
  const mappedPermissions = Object.values(userPermissions).flat()
  return {
    mappedPermissions,
    userExists,
  };
};

export default getUserPermissions;
