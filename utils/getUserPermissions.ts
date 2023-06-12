import { MOCKED_USERS } from "../constants";

const getUserPermissions = (id: string) => {
  const userPermissions = Object.keys(MOCKED_USERS).map((item) => {
    item === id ? MOCKED_USERS[item] : null;
  });
};

export default getUserPermissions;
