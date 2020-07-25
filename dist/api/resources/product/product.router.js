'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.productRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('./product.controller');

var _product2 = _interopRequireDefault(_product);

var _uploadSingle = require('../../middleware/upload-single');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productRouter = exports.productRouter = _express2.default.Router();

productRouter.route('/').post(_uploadSingle.uploadSingle.any(), _product2.default.createProduct).get(_product2.default.getAllProduct);

productRouter.route('/:id').delete(_product2.default.deleteProduct).get(_product2.default.getOne).put(_uploadSingle.uploadSingle.any(), _product2.default.updateProduct);

productRouter.get('/updatestatus/:id', _product2.default.updateStatus);
productRouter.get('/updatehome/:id', _product2.default.updateHome);