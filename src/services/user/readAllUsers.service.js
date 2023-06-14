import { data } from "../../database/fakeData.js";

export const readAllUsersService = () => {
  const response = {
    count: data.length,
    results: data.map((user) => user.info()),
  };

  return response;
};
