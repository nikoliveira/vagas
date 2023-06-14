import { AppError } from "../errors/appError.js";

export const updateTotalUserVerifyFieldsMiddleware = (req, res, next) => {
  const { name, job, isAdm, password } = req.body;

  if (!name || !job || !password || isAdm === undefined || isAdm === null) {
    throw new AppError(
      400,
      "fields name, job, isAdm and password is mandatory"
    );
  }

  let error = "";

  if (typeof name !== "string") {
    error += "name: must be string";
  }

  if (typeof job !== "string") {
    error += "job: must be stringd";
  }

  if (typeof password !== "string") {
    error += "password: must be string";
  }

  if (typeof isAdm !== "boolean") {
    error += "isAdm: must be boolean";
  }

  if (error) {
    throw new AppError(400, error);
  }

  next();
};
