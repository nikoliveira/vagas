import { ErrorRequestHandler } from 'express';
import APIError from '../utils/errorClass';

const errorHandler: ErrorRequestHandler = (err: APIError | Error, _req, res, _next) => {
  // unexpected error
  if(err instanceof Error) {
    console.log(err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }

  enum errorMap {
    alreadyExists = 409,
    notFound = 404,
    badRequest = 400,
    unauthorized = 401,
    serverError = 500,
  };

  const statusCode: number = errorMap[err.code];

  // domain error
  res.status(statusCode).json({ error: err.message });
};

export default errorHandler;
