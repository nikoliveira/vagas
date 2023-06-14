import * as Joi from 'joi';

export const createUserSchema = Joi.object({
  name: Joi.string().required(),
  job: Joi.string().required(),
  password: Joi.string().required(),
  isAdmin: Joi.boolean(),
}).options({ convert: false });

export const updateUserSchema = Joi.object({
  name: Joi.string(),
  job: Joi.string(),
}).options({ convert: false });
