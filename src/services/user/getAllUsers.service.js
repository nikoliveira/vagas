import data from "../../database/fakeData";

export const getAllUsersService = () => {
  const response = {
    count: data.length,
    results: data,
  };

  return response;
};
