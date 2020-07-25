import Joi from 'joi';

export default {
    validateCreateProduct(body) {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            product_cate: Joi.string().required(),
            status: Joi.boolean().required(),
            is_home: Joi.boolean().required(),
            position: Joi.optional(),
            intro: Joi.optional(),
            price: Joi.optional(),
            description: Joi.optional(),
            file: Joi.optional()
        })
        const { error, value } = Joi.validate(body, schema)
        if (error && error.details) {
            return { error }
        }
        return { value }
    },
    validateUpdateProduct(body) {
        const schema = Joi.object().keys({
            name: Joi.optional(),
            product_cate: Joi.optional(),
            status: Joi.optional(),
            is_home: Joi.optional(),
            position: Joi.optional(),
            intro: Joi.optional(),
            price: Joi.optional(),
            description: Joi.optional(),
            file: Joi.optional()
        })
        const { error, value } = Joi.validate(body, schema);
        if (error && error.details) {
            return { error }
        }
        return { value }
    }
}