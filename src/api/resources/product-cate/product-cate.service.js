import Joi, { validate } from 'joi';

export default {
    validateCreateProductCate(body) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.optional(),
            status: Joi.optional(),
            position: Joi.optional(),
            photo: Joi.optional(),
        })
        const { error, value } = Joi.validate(body, schema);
        if (error && error.details) {
            return { error }
        }
        return { value }
    },

    validateUpdateProductCate(body) {
        const schema = Joi.object().keys({
            name: Joi.optional(),
            description: Joi.optional(),
            status: Joi.optional(),
            position: Joi.optional(),
            photo: Joi.optional(),
        })
        const { error, value } = Joi.validate(body, schema);
        if (error && error.details) {
            return { error }
        }
        return { value }
    }
}