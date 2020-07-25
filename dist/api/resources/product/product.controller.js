'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _product = require('./product.model');

var _product2 = _interopRequireDefault(_product);

var _httpStatusCodes = require('http-status-codes');

var _product3 = require('./product.service');

var _product4 = _interopRequireDefault(_product3);

var _slugify = require('slugify');

var _slugify2 = _interopRequireDefault(_slugify);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    getAllProduct: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
            var _req$query, _req$query$page, page, _req$query$perPage, perPage, filter, sortField, sortDir, options, query, product;

            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === undefined ? 1 : _req$query$page, _req$query$perPage = _req$query.perPage, perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage, filter = _req$query.filter, sortField = _req$query.sortField, sortDir = _req$query.sortDir;

                            console.log(page);
                            console.log(perPage);
                            options = {
                                page: parseInt(page, 10),
                                limit: parseInt(perPage, 10),
                                populate: 'ProductCate'
                            };
                            query = {};

                            if (filter) {
                                query.name = {
                                    $regex: filter,
                                    $options: 'i'
                                };
                            }
                            if (sortField && sortDir) {
                                options.sort = (0, _defineProperty3.default)({}, sortField, sortDir);
                            }
                            _context.next = 10;
                            return _product2.default.paginate(query, options);

                        case 10:
                            product = _context.sent;

                            if (product) {
                                _context.next = 13;
                                break;
                            }

                            return _context.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: ' can not found any product' }));

                        case 13:
                            return _context.abrupt('return', res.status(_httpStatusCodes.OK).json(product));

                        case 16:
                            _context.prev = 16;
                            _context.t0 = _context['catch'](0);
                            return _context.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

                        case 19:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 16]]);
        }));

        function getAllProduct(_x, _x2) {
            return _ref.apply(this, arguments);
        }

        return getAllProduct;
    }(),
    createProduct: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
            var _ref3, error, value, product;

            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _product4.default.validateCreateProduct(req.body);

                        case 3:
                            _ref3 = _context2.sent;
                            error = _ref3.error;
                            value = _ref3.value;

                            if (!error) {
                                _context2.next = 8;
                                break;
                            }

                            return _context2.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

                        case 8:
                            if (req.files.length > 0) {
                                value.photo = req.files[0].filename;
                            }
                            _context2.next = 11;
                            return (0, _slugify2.default)(value.name, { locale: 'vi' });

                        case 11:
                            value.slug = _context2.sent;

                            console.log(value);
                            _context2.next = 15;
                            return _product2.default.create(value);

                        case 15:
                            product = _context2.sent;
                            return _context2.abrupt('return', res.status(_httpStatusCodes.OK).json(product));

                        case 19:
                            _context2.prev = 19;
                            _context2.t0 = _context2['catch'](0);
                            return _context2.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

                        case 22:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this, [[0, 19]]);
        }));

        function createProduct(_x3, _x4) {
            return _ref2.apply(this, arguments);
        }

        return createProduct;
    }(),
    updateProduct: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
            var id, _ref5, error, value, pr, link, product;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            id = req.params.id;
                            _context3.next = 4;
                            return _product4.default.validateUpdateProduct(req.body);

                        case 4:
                            _ref5 = _context3.sent;
                            error = _ref5.error;
                            value = _ref5.value;

                            console.log(value);

                            if (!error) {
                                _context3.next = 10;
                                break;
                            }

                            return _context3.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

                        case 10:
                            _context3.next = 12;
                            return _product2.default.findById(id);

                        case 12:
                            pr = _context3.sent;

                            if (pr) {
                                _context3.next = 15;
                                break;
                            }

                            return _context3.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'can not found any product' }));

                        case 15:
                            if (req.files.length > 0) {
                                value.photo = req.files[0].filename;
                                link = 'uploads/' + pr.photo;

                                if (_fs2.default.existsSync(link)) {
                                    _fs2.default.unlinkSync(link);
                                }
                            } else {
                                value.photo = pr.photo;
                            }
                            _context3.next = 18;
                            return _product2.default.findByIdAndUpdate(id, value, { new: true });

                        case 18:
                            product = _context3.sent;

                            if (product) {
                                _context3.next = 21;
                                break;
                            }

                            return _context3.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: 'sao the nay' }));

                        case 21:
                            return _context3.abrupt('return', res.status(_httpStatusCodes.OK).json(product));

                        case 24:
                            _context3.prev = 24;
                            _context3.t0 = _context3['catch'](0);
                            return _context3.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context3.t0));

                        case 27:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this, [[0, 24]]);
        }));

        function updateProduct(_x5, _x6) {
            return _ref4.apply(this, arguments);
        }

        return updateProduct;
    }(),
    deleteProduct: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
            var id, product, link;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            id = req.params.id;
                            _context4.next = 4;
                            return _product2.default.findByIdAndDelete(id);

                        case 4:
                            product = _context4.sent;

                            if (product) {
                                _context4.next = 7;
                                break;
                            }

                            return _context4.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: 'can not found any product' }));

                        case 7:
                            if (product.photo) {
                                link = 'uploads/' + product.photo;

                                if (_fs2.default.existsSync(link)) {
                                    _fs2.default.unlinkSync(link);
                                }
                            }
                            return _context4.abrupt('return', res.status(_httpStatusCodes.OK).json(product));

                        case 11:
                            _context4.prev = 11;
                            _context4.t0 = _context4['catch'](0);
                            return _context4.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context4.t0));

                        case 14:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this, [[0, 11]]);
        }));

        function deleteProduct(_x7, _x8) {
            return _ref6.apply(this, arguments);
        }

        return deleteProduct;
    }(),
    updateStatus: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
            var id, product;
            return _regenerator2.default.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            id = req.params.id;
                            _context5.next = 4;
                            return _product2.default.findById(id);

                        case 4:
                            product = _context5.sent;

                            product.status = !product.status;
                            product.save();

                            if (product) {
                                _context5.next = 9;
                                break;
                            }

                            return _context5.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: 'can not found any product' }));

                        case 9:
                            return _context5.abrupt('return', res.status(_httpStatusCodes.OK).json(product));

                        case 12:
                            _context5.prev = 12;
                            _context5.t0 = _context5['catch'](0);
                            return _context5.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context5.t0));

                        case 15:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this, [[0, 12]]);
        }));

        function updateStatus(_x9, _x10) {
            return _ref7.apply(this, arguments);
        }

        return updateStatus;
    }(),
    updateHome: function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
            var id, product;
            return _regenerator2.default.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.prev = 0;
                            id = req.params.id;
                            _context6.next = 4;
                            return _product2.default.findById(id);

                        case 4:
                            product = _context6.sent;

                            product.is_home = !product.is_home;
                            product.save();

                            if (product) {
                                _context6.next = 9;
                                break;
                            }

                            return _context6.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: 'can not found any product' }));

                        case 9:
                            return _context6.abrupt('return', res.status(_httpStatusCodes.OK).json(product));

                        case 12:
                            _context6.prev = 12;
                            _context6.t0 = _context6['catch'](0);
                            return _context6.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context6.t0));

                        case 15:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, this, [[0, 12]]);
        }));

        function updateHome(_x11, _x12) {
            return _ref8.apply(this, arguments);
        }

        return updateHome;
    }(),
    getOne: function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
            var id, product;
            return _regenerator2.default.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.prev = 0;
                            id = req.params.id;
                            _context7.next = 4;
                            return _product2.default.findById(id);

                        case 4:
                            product = _context7.sent;

                            if (product) {
                                _context7.next = 7;
                                break;
                            }

                            return _context7.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: 'can not found any product' }));

                        case 7:
                            return _context7.abrupt('return', res.status(_httpStatusCodes.OK).json(product));

                        case 10:
                            _context7.prev = 10;
                            _context7.t0 = _context7['catch'](0);
                            return _context7.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context7.t0));

                        case 13:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, this, [[0, 10]]);
        }));

        function getOne(_x13, _x14) {
            return _ref9.apply(this, arguments);
        }

        return getOne;
    }()
};