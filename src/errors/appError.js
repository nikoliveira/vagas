export class AppError {
  statusCode;
  message;
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
