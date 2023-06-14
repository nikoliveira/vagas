import * as Joi from 'joi';

export const loginSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
}).options({ convert: false });
