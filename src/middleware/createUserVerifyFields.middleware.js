import { AppError } from "../errors/appError.js";

export const createUserVerifyFieldsMiddleware = (req, res, next) => {
  const { name, job } = req.body;

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
    error += "job: must be stringd";
  }

  if (error) {
    throw new AppError(400, error);
  }

  next();
};
