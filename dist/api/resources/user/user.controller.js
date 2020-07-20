'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _httpStatusCodes = require('http-status-codes');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('./user.service');

var _user2 = _interopRequireDefault(_user);

var _user3 = require('./user.model');

var _user4 = _interopRequireDefault(_user3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  singup: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
      var _ref2, error, value, user;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _user2.default.validateUser(req.body);

            case 3:
              _ref2 = _context.sent;
              error = _ref2.error;
              value = _ref2.value;

              if (!error) {
                _context.next = 8;
                break;
              }

              return _context.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ error: error }));

            case 8:
              _context.next = 10;
              return _user4.default.create(value);

            case 10:
              user = _context.sent;
              return _context.abrupt('return', res.status(_httpStatusCodes.OK).json({ success: true, msg: 'User created successfully' }));

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

    function singup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return singup;
  }(),
  singin: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
      var _userService$validate, error, value, user, matched, token;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validate = _user2.default.validateUser(req.body), error = _userService$validate.error, value = _userService$validate.value;

              if (!error) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json(error));

            case 4:
              _context2.next = 6;
              return _user4.default.findOne({ email: value.email });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt('return', res.status(_httpStatusCodes.BAD_REQUEST).json({ err: 'Invalid email' }));

            case 9:
              _context2.next = 11;
              return _bcrypt2.default.compare(value.password, user.password);

            case 11:
              matched = _context2.sent;

              if (matched) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt('return', res.status(_httpStatusCodes.UNAUTHORIZED).json({ err: 'Invalid password' }));

            case 14:
              _context2.next = 16;
              return _jsonwebtoken2.default.sign({ user: user }, process.env.SECRET_KEY, { expiresIn: '1d' });

            case 16:
              token = _context2.sent;
              return _context2.abrupt('return', res.json({ success: true, token: token }));

            case 20:
              _context2.prev = 20;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', res.status(_httpStatusCodes.INTERNAL_SERVER_ERROR).json(_context2.t0));

            case 23:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 20]]);
    }));

    function singin(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return singin;
  }(),
  test: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', res.json(req.user));

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function test(_x5, _x6) {
      return _ref4.apply(this, arguments);
    }

    return test;
  }()
};