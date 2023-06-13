import { AppError } from "../errors/appError.js";

export const updatePartialUserVerifyFieldsMiddleware = (req, res, next) => {
  const { name, job } = req.body;

  if (!name && !job) {
    throw new AppError(400, "nothing to update");
  }

  let error = "";

  if (name && typeof name !== "string") {
    error += "name: must be string";
  }

  if (job && typeof job !== "string") {
    error += "job: must be stringd";
  }

  if (error) {
    throw new AppError(400, error);
  }

  next();
};
