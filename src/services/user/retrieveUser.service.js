import data from "../../database/fakeData";

export const retrieveUserService = (userId) => {
  const foundUser = data.find((user) => user.id === userId);
};
