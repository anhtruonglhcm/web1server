'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureJWTStragety = undefined;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require('passport-jwt');

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _user = require('../resources/user/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configureJWTStragety = exports.configureJWTStragety = function configureJWTStragety() {
  var opts = {};
  opts.jwtFromRequest = _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.SECRET_KEY;
  _passport2.default.use(new _passportJwt2.default.Strategy(opts, function (payload, done) {
    _user2.default.findOne({ email: payload.user.email }, function (err, user) {
      if (err) return done(err, false);
      if (user) return done(null, user);
      return done(null, false);
    });
  }));
};