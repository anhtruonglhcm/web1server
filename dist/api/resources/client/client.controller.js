'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _httpStatusCodes = require('http-status-codes');

var _client = require('./client.model');

var _client2 = _interopRequireDefault(_client);

var _client3 = require('./client.service');

var _client4 = _interopRequireDefault(_client3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  createClient: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _ref2, error, value, client;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _client4.default.validateCreateSchema(req.body);

            case 2:
              _ref2 = _context.sent;
              error = _ref2.error;
              value = _ref2.value;

              if (!(error && error.details)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 7:
              _context.next = 9;
              return _client2.default.create(value);

            case 9:
              client = _context.sent;
              return _context.abrupt('return', res.status(_httpStatusCodes.OK).json(client));

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function createClient(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return createClient;
  }(),
  findAll: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var client;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _client2.default.find();

            case 2:
              client = _context2.sent;

              if (!client) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt('return', res.status(_httpStatusCodes.OK).json(client));

            case 5:
              return _context2.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'could not found any client' }));

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function findAll(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return findAll;
  }(),
  findOne: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      var client;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _client2.default.findById(req.params.id);

            case 2:
              client = _context3.sent;

              if (!client) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt('return', res.status(_httpStatusCodes.OK).json(client));

            case 5:
              return _context3.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'could not found any client' }));

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function findOne(_x5, _x6) {
      return _ref4.apply(this, arguments);
    }

    return findOne;
  }(),
  deleteClient: function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
      var client;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _client2.default.findOneAndDelete({ _id: req.params.id });

            case 2:
              client = _context4.sent;

              if (client) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'could not found any client' }));

            case 5:
              return _context4.abrupt('return', res.status(_httpStatusCodes.OK).json(client));

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function deleteClient(_x7, _x8) {
      return _ref5.apply(this, arguments);
    }

    return deleteClient;
  }(),
  updateClient: function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
      var _ref7, error, value, client;

      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _client4.default.validateUpdateSchema(req.body);

            case 2:
              _ref7 = _context5.sent;
              error = _ref7.error;
              value = _ref7.value;

              if (!error) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 7:
              client = _client2.default.findByIdAndUpdate(req.params.id, value, { new: true });

              if (!client) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt('return', res.status(_httpStatusCodes.OK).json(client));

            case 10:
              return _context5.abrupt('return', res.status(_httpStatusCodes.NOT_FOUND).json({ msg: 'could not found any client' }));

            case 11:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function updateClient(_x9, _x10) {
      return _ref6.apply(this, arguments);
    }

    return updateClient;
  }()
};