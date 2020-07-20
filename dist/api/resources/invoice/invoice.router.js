'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invoiceRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _invoice = require('./invoice.controller');

var _invoice2 = _interopRequireDefault(_invoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var invoiceRouter = exports.invoiceRouter = _express2.default.Router();
invoiceRouter.route('/').get(_invoice2.default.findAll).post(_invoice2.default.createInvoice);
invoiceRouter.route('/:id').delete(_invoice2.default.deleteInvoice).put(_invoice2.default.updateInvoice).get(_invoice2.default.findOne);