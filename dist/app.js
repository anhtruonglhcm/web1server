'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require('./api/middleware/passport-jwt');

var _index = require('./api/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());
app.use(_passport2.default.initialize());
(0, _passportJwt.configureJWTStragety)();
_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/invoice', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, function (err) {
  if (err) {
    console.log('connect failed');
  } else {
    console.log('connect success');
  }
});
app.use('/api', _index.restRouter);
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  err.message = 'Invalid route';
  next(err);
});
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
  res.status = err.status || 500;
  return res.json({
    err: {
      msg: err.message
    }
  });
});
app.listen(PORT, function () {
  console.log('serve is listenning on port ' + PORT);
});