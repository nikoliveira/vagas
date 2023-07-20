import type {Request} from 'express';

interface BodyRequest<T> extends Request {
  body: T;
}

export default BodyRequest;
