import { AppError } from "../errors/appError.js";

export const createUserVerifyFieldsMiddleware = (req, res, next) => {
  const { name, job, password } = req.body;

  let error = "";

  if (!name) {
    error += "name: is required. ";
  }

  if (name && typeof name !== "string") {
    error += "name: must be string";
  }

  if (!job) {
    error += "job: is required";
  }

  if (job && typeof job !== "string") {
    error += "job: must be string";
  }

  if (!password) {
    error += "password: is required";
  }

  if (password && typeof password !== "string") {
    error += "password: must be string";
  }

  if (error) {
    throw new AppError(400, error);
  }

  next();
};
