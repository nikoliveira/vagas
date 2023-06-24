export class AppError extends Error {
    statusCode;
    constructor(message: string, statusCode: number) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
