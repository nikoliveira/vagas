import { AppError } from "../errors/appError.js";

export const isAdmMiddleware = (req, _, next) => {
  const { userIsAdm } = req;

  if (!userIsAdm) {
    throw new AppError(401, "this route can only be accessed by admin users");
  }

  next();
};
