'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var UserScheam = Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true }
});
UserScheam.pre('save', function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var salt, hash;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _bcrypt2.default.genSalt();

          case 2:
            salt = _context.sent;
            _context.next = 5;
            return _bcrypt2.default.hash(this.password, salt);

          case 5:
            hash = _context.sent;

            this.password = hash;

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function hashPassword() {
    return _ref.apply(this, arguments);
  }

  return hashPassword;
}());
exports.default = _mongoose2.default.model('User', UserScheam);