import Joi from 'joi';

export default {
  validateCreateSchema(body) {
    const schema = Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().email().required(),
    });
    const { error, value } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
  validateUpdateSchema(body) {
    const schema = Joi.object().keys({
      lastName: Joi.string().optional(),
      firstName: Joi.string().optional(),
      email: Joi.string().optional(),
    });
    const { error, value } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
};
