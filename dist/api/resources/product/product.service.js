'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    validateCreateProduct: function validateCreateProduct(body) {
        var schema = _joi2.default.object().keys({
            name: _joi2.default.string().required(),
            product_cate: _joi2.default.string().required(),
            status: _joi2.default.boolean().required(),
            is_home: _joi2.default.boolean().required(),
            position: _joi2.default.optional(),
            intro: _joi2.default.optional(),
            price: _joi2.default.optional(),
            description: _joi2.default.optional()
        });

        var _Joi$validate = _joi2.default.validate(body, schema),
            error = _Joi$validate.error,
            value = _Joi$validate.value;

        if (error && error.details) {
            return { error: error };
        }
        return { value: value };
    },
    validateUpdateProduct: function validateUpdateProduct(body) {
        var schema = _joi2.default.object().keys({
            name: _joi2.default.optional(),
            product_cate: _joi2.default.optional(),
            status: _joi2.default.optional(),
            is_home: _joi2.default.optional(),
            position: _joi2.default.optional(),
            intro: _joi2.default.optional(),
            price: _joi2.default.optional(),
            description: _joi2.default.optional()
        });

        var _Joi$validate2 = _joi2.default.validate(body, schema),
            error = _Joi$validate2.error,
            value = _Joi$validate2.value;

        if (error && error.details) {
            return { error: error };
        }
        return { value: value };
    }
};