import { data } from "../../database/fakeData.js";

export const getAllUsersService = () => {
  const response = {
    count: data.length,
    results: data.reverse().map((user) => user.info()),
  };

  return response;
};
