import data from "../../database/fakeData.js";

export const getAllUsersService = () => {
  const response = {
    count: data.length,
    results: data,
  };

  return response;
};
