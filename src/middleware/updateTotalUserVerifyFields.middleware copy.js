import { AppError } from "../errors/appError.js";

export const updateTotalUserVerifyFieldsMiddleware = (req, res, next) => {
  const { name, job } = req.body;

  if (!name || !job) {
    throw new AppError(400, "fields name and job is mandatory");
  }

  let error = "";

  if (typeof name !== "string") {
    error += "name: must be string";
  }

  if (typeof job !== "string") {
    error += "job: must be stringd";
  }

  if (error) {
    throw new AppError(400, error);
  }

  next();
};
