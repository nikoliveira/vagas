import { AppError } from "../errors/appError.js";
import jwt from "jsonwebtoken";

export const isAuthenticatedMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new AppError(401, "token not sent");
  }

  const tokenArray = authorization.split(" ");

  if (tokenArray[0] !== "Bearer") {
    throw new AppError(400, "token must be Bearer");
  }

  const token = tokenArray[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      throw new AppError(401, "invalid/expired token");
    }

    req.userId = decoded.userId;
    req.userName = decoded.userName;
    req.userIsAdm = decoded.userIsAdm;

    next();
  });
};
