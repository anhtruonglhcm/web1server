import Joi from 'joi';

export default {
  validateCreateInvoice(body) {
    const schema = Joi.object().keys({
      item: Joi.string().required(),
      price: Joi.string().required(),
      qty: Joi.number().integer().required(),
      date: Joi.date(),
      client: Joi.string().required(),
    });
    const { error, value } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
  validateUpdateInvoice(body) {
    const schema = Joi.object().keys({
      item: Joi.string().optional(),
      price: Joi.number().optional(),
      qty: Joi.number().integer().optional(),
      date: Joi.optional(),
      client: Joi.string().optional(),
    });
    const { error, value } = Joi.validate(body, schema);
    if (error && error.details) {
      return { error };
    }
    return { value };
  },
};
