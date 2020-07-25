'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateCreateInvoice: function validateCreateInvoice(body) {
    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().required(),
      price: _joi2.default.string().required(),
      qty: _joi2.default.number().integer().required(),
      date: _joi2.default.date(),
      client: _joi2.default.string().required()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return { error: error };
    }
    return { value: value };
  },
  validateUpdateInvoice: function validateUpdateInvoice(body) {
    var schema = _joi2.default.object().keys({
      item: _joi2.default.string().optional(),
      price: _joi2.default.number().optional(),
      qty: _joi2.default.number().integer().optional(),
      date: _joi2.default.optional(),
      client: _joi2.default.string().optional()
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