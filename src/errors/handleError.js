import { AppError } from "./appError.js";

export const handleErrorMiddleware = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "Error",
      code: err.statusCode,
      message: err.message,
    });
  }

  console.error("Error 500 => ", err);

  return res.status(500).json({
    status: "Error",
    code: 500,
    message: "Internal server Error",
  });
};
