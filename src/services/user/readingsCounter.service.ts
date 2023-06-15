import { readingsCounter } from "../../database/fakeData";
import fakeData from "../../database/fakeData";
import { AppError } from "../../errors/appError";

export const readingsCounterService = (userId: string) => {
  const foundUser = fakeData.find((user) => user.id === userId);

  const foundReading = readingsCounter.find((read) => read.id === userId);

  let message = ``;

  if (!foundUser) {
    throw new AppError(404, "User Not Found!");
  } else if (!foundReading) {
    let counterData = {
      id: foundUser.id,
      counter: 0,
    };
    readingsCounter.push(counterData);

    let message = `The User Have Been Read ${counterData.counter} Times.`;

    return message;
  }

  message = `The User Have Been Read ${foundReading.counter} Times.`;

  return message;
};
