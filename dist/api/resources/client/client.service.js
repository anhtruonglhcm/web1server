'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateCreateSchema: function validateCreateSchema(body) {
    var schema = _joi2.default.object().keys({
      firstName: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      email: _joi2.default.string().email().required()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  },
  validateUpdateSchema: function validateUpdateSchema(body) {
    var schema = _joi2.default.object().keys({
      lastName: _joi2.default.string().optional(),
      firstName: _joi2.default.string().optional(),
      email: _joi2.default.string().optional()
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