'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _productCate = require('./product-cate.service');

var _productCate2 = _interopRequireDefault(_productCate);

var _httpStatusCodes = require('http-status-codes');

var _productCate3 = require('./product-cate.model');

var _productCate4 = _interopRequireDefault(_productCate3);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    createProductCate: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
            var _productCateService$v, error, value, name, description, status, position, productCate;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _productCateService$v = _productCate2.default.validateCreateProductCate(req.body), error = _productCateService$v.error, value = _productCateService$v.value;

                            if (!error) {
                                _context.next = 4;
                                break;
                            }

                            return _context.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

                        case 4:
                            name = value.name, description = value.description, status = value.status, position = value.position;
                            productCate = new _productCate4.default();

                            productCate.name = name;
                            productCate.description = description;
                            productCate.status = status ? status : false;
                            productCate.position = position ? position : 0;
                            productCate.photo = req.files.length > 0 ? req.files[0].filename : '';
                            console.log(productCate);
                            _context.next = 14;
                            return productCate.save();

                        case 14:
                            return _context.abrupt('return', res.status(_httpStatusCodes.OK).json(productCate));

                        case 17:
                            _context.prev = 17;
                            _context.t0 = _context['catch'](0);
                            return _context.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

                        case 20:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 17]]);
        }));

        function createProductCate(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return createProductCate;
    }(),
    findAll: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
            var productCate;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _productCate4.default.find();

                        case 3:
                            productCate = _context2.sent;

                            if (!productCate) {
                                _context2.next = 6;
                                break;
                            }

                            return _context2.abrupt('return', res.status(_httpStatusCodes.OK).json(productCate));

                        case 6:
                            return _context2.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: 'not found any ProductCate' }));

                        case 9:
                            _context2.prev = 9;
                            _context2.t0 = _context2['catch'](0);
                            return _context2.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

                        case 12:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 9]]);
        }));

        function findAll(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return findAll;
    }(),
    deleteProductCate: function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
            var id, productCate, link;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            id = req.params.id;
                            _context3.next = 4;
                            return _productCate4.default.findByIdAndDelete(id);

                        case 4:
                            productCate = _context3.sent;

                            if (productCate) {
                                _context3.next = 7;
                                break;
                            }

                            return _context3.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'can not found any productCate' }));

                        case 7:
                            if (productCate.photo) {
                                link = 'uploads/' + productCate.photo;

                                if (_fs2.default.existsSync(link)) {
                                    _fs2.default.unlinkSync(link);
                                }
                            }

                            return _context3.abrupt('return', res.status(_httpStatusCodes.OK).json(productCate));

                        case 11:
                            _context3.prev = 11;
                            _context3.t0 = _context3['catch'](0);
                            return _context3.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context3.t0));

                        case 14:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this, [[0, 11]]);
        }));

        function deleteProductCate(_x5, _x6) {
            return _ref3.apply(this, arguments);
        }

        return deleteProductCate;
    }()
};