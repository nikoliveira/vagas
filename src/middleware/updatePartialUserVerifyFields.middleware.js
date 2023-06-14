import { AppError } from "../errors/appError.js";

export const updatePartialUserVerifyFieldsMiddleware = (req, res, next) => {
  const { name, job, isAdm, password } = req.body;

  if (!name && !job && !password && (isAdm === undefined || isAdm === null)) {
    throw new AppError(400, "nothing to update");
  }

  let error = "";

  if (name && typeof name !== "string") {
    error += "name: must be string";
  }

  if (job && typeof job !== "string") {
    error += "job: must be string";
  }

  if (password && typeof password !== "string") {
    error += "password: must be string";
  }

  if (isAdm !== undefined && isAdm !== null && typeof isAdm !== "boolean") {
    error += "isAdm: must be boolean";
  }

  if (error) {
    throw new AppError(400, error);
  }

  next();
};
