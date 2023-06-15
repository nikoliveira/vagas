import { AppError } from "../../errors/appError";
import fakeData, { readingsCounter } from "../../database/fakeData";

export const retrieveUserService = (id: string) => {
  const foundUser = fakeData.find((user) => user.id === id);

  const foundReadings = readingsCounter.find((read) => read.id === id);

  if (!foundUser) {
    throw new AppError(404, "User not found!");
  } else if (!foundReadings) {
    let counterData = {
      id: foundUser.id,
      counter: 1,
    };
    readingsCounter.push(counterData);
  }

  foundReadings!.counter += 1;

  return foundUser;
};
