type httpCode =
  | 'alreadyExists'
  | 'notFound'
  | 'badRequest'
  | 'unauthorized'
  | 'serverError';

class APIError {
  code: httpCode;

  message: string;

  constructor(message: string, code: httpCode) {
    this.code = code;
    this.message = message;
  }
}

export default APIError;
