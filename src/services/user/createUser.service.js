import { AppError } from "../../errors/appError.js";
import data from "../../database/fakeData.js";
import { v4 as uuid } from "uuid";

export const createUserService = ({ name, job }) => {
  // colocar essa lógica num middleware
  // if (!name || !job) {
  //   throw new AppError(400, "name: is required, job: isRequired");
  // }

  const newUser = {
    id: uuid(),
    name,
    job: job.toLowerCase(),
  };

  data.push(newUser);

  return newUser;
};
