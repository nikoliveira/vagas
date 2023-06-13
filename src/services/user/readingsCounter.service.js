import { AppError } from "../../errors/appError.js";
import { data, readings } from "../../database/fakeData.js";

export const readingsCounterService = (userId) => {
  if (!userId) {
    throw new AppError(400, "userId not provided in route parameters");
  }

  const userFound = data.find((user) => user.id === userId);

  if (!userFound) {
    throw new AppError(404, "user not found");
  }

  const counter = readings.reduce(
    (acc, id) => (id === userId ? (acc += 1) : acc),
    0
  );

  const response = {
    message: `O usuário ${userFound.name} foi lido ${counter} vez${
      counter !== 1 && "es"
    } no banco de dados.`,
  };

  return response;
};
