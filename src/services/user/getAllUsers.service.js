import data from "../../database/fakeData";

export const getAllUsersServices = () => {
  const response = {
    count: data.length,
    results: data,
  };

  return response;
};
