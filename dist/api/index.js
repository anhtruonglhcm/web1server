'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _invoice = require('./resources/invoice');

var _client = require('./resources/client');

var _user = require('./resources/user');

var _productCate = require('./resources/product-cate');

var _product = require('./resources/product');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router();
restRouter.use('/invoice', _invoice.invoiceRouter);
restRouter.use('/client', _client.clientRouter);
restRouter.use('/user', _user.userRouter);
restRouter.use('/product-cate', _productCate.productCateRouter);
restRouter.use('/product', _product.productRouter);

// passport.authenticate('jwt', { session: false })