'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.productCateRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _productCate = require('./product-cate.controller');

var _productCate2 = _interopRequireDefault(_productCate);

var _uploadSingle = require('../../middleware/upload-single');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productCateRouter = exports.productCateRouter = _express2.default.Router();
productCateRouter.route('/').post(_uploadSingle.uploadSingle.any(), _productCate2.default.createProductCate).get(_productCate2.default.findAll);

productCateRouter.route('/:id').delete(_productCate2.default.deleteProductCate);