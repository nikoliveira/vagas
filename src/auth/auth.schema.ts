import * as Joi from 'joi';

const loginSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
}).options({ convert: false });

export default loginSchema;
