import { MOCKED_USERS } from "../constants";

const getUserPermissions = (id: string) => {


  const userPermissions = MOCKED_USERS.find((item) => {
    return item[id];
  });

  const userExists = !!userPermissions;

  return {
    userPermissions,
    userExists,
  };
};

export default getUserPermissions;
