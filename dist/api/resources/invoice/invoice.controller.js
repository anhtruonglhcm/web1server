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

var _httpStatusCodes = require('http-status-codes');

var _invoice = require('./invoice.service');

var _invoice2 = _interopRequireDefault(_invoice);

var _invoice3 = require('./invoice.model');

var _invoice4 = _interopRequireDefault(_invoice3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  findAll: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _req$query, _req$query$page, page, _req$query$perPage, perPage, filter, sortField, sortDir, options, query, invoice;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === undefined ? 1 : _req$query$page, _req$query$perPage = _req$query.perPage, perPage = _req$query$perPage === undefined ? 10 : _req$query$perPage, filter = _req$query.filter, sortField = _req$query.sortField, sortDir = _req$query.sortDir;
              options = {
                page: parseInt(page, 10),
                limit: parseInt(perPage, 10),
                populate: 'Client'
              };
              query = {};

              if (filter) {
                query.item = {
                  $regex: filter,
                  $options: 'i'
                };
              }
              if (sortField && sortDir) {
                options.sort = (0, _defineProperty3.default)({}, sortField, sortDir);
              }
              _context.next = 8;
              return _invoice4.default.paginate(query, options);

            case 8:
              invoice = _context.sent;

              if (!invoice) {
                _context.next = 11;
                break;
              }

              return _context.abrupt('return', res.status(_httpStatusCodes.OK).json(invoice));

            case 11:
              return _context.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'could not find any invoice' }));

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](0);
              return _context.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context.t0));

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 14]]);
    }));

    function findAll(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return findAll;
  }(),
  createInvoice: function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _invoiceService$valid, error, value, invoice;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _invoiceService$valid = _invoice2.default.validateCreateInvoice(req.body), error = _invoiceService$valid.error, value = _invoiceService$valid.value;

              if (error) {
                res.status(_httpStatusCodes.BAD_REQUEST).json(error);
              }
              _context2.next = 5;
              return _invoice4.default.create(value);

            case 5:
              invoice = _context2.sent;

              if (!invoice) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt('return', res.status(_httpStatusCodes.OK).json(invoice));

            case 8:
              return _context2.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: 'could not create any invoice' }));

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 11]]);
    }));

    function createInvoice(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return createInvoice;
  }(),
  findOne: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var invoice;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _invoice4.default.findById(req.params.id);

            case 3:
              invoice = _context3.sent;

              if (!invoice) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt('return', res.status(_httpStatusCodes.OK).json(invoice));

            case 6:
              return _context3.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'could not find any invoice' }));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3['catch'](0);
              return _context3.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context3.t0));

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 9]]);
    }));

    function findOne(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return findOne;
  }(),
  deleteInvoice: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var invoice;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _invoice4.default.findByIdAndDelete(req.params.id);

            case 3:
              invoice = _context4.sent;

              if (!invoice) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt('return', res.status(_httpStatusCodes.OK).json(invoice));

            case 6:
              return _context4.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'could not find any invoice' }));

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](0);
              return _context4.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context4.t0));

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 9]]);
    }));

    function deleteInvoice(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return deleteInvoice;
  }(),
  updateInvoice: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var _invoiceService$valid2, error, value, invoice;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _invoiceService$valid2 = _invoice2.default.validateUpdateInvoice(req.body), error = _invoiceService$valid2.error, value = _invoiceService$valid2.value;

              if (!error) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 4:
              console.log(value);
              _context5.next = 7;
              return _invoice4.default.findByIdAndUpdate(req.params.id, value, { new: true });

            case 7:
              invoice = _context5.sent;

              if (!invoice) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt('return', res.status(_httpStatusCodes.OK).json(invoice));

            case 10:
              return _context5.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ msg: 'could not find any invoice' }));

            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5['catch'](0);
              return _context5.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context5.t0));

            case 16:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 13]]);
    }));

    function updateInvoice(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return updateInvoice;
  }()
};