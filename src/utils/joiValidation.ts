import * as Joi from 'joi';
import { messages } from 'joi-translation-pt-br';
import APIError from './errorClass';

const joiValidate = (
  schema: Joi.ObjectSchema | Joi.ArraySchema,
  payload: any,
) => {
  const { error } = schema.validate(payload, { messages });

  if (error) {
    throw new APIError(error.message, 'badRequest');
  }
};

export default joiValidate;
