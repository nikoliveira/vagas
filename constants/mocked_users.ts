import permissions from "./permissions";

const MOCKED_USERS = [
  {
    "123456789": [permissions.DELETE_USER, permissions.UPDATE_USER],
  },
  {
    "987456321": [permissions.UPDATE_USER],
  },
  { "147852369": [permissions.DELETE_USER] },
];

export default MOCKED_USERS;
