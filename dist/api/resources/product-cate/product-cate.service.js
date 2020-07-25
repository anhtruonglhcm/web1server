'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    validateCreateProductCate: function validateCreateProductCate(body) {
        var schema = _joi2.default.object().keys({
            name: _joi2.default.string().required(),
            description: _joi2.default.optional(),
            status: _joi2.default.optional(),
            position: _joi2.default.optional(),
            photo: _joi2.default.optional()
        });

        var _Joi$validate = _joi2.default.validate(body, schema),
            error = _Joi$validate.error,
            value = _Joi$validate.value;

        if (error && error.details) {
            return { error: error };
        }
        return { value: value };
    }
};