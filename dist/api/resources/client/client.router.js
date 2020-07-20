'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientRouter = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _client = require('./client.controller');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clientRouter = exports.clientRouter = _express2.default.Router();
clientRouter.route('/').post(_client2.default.createClient).get(_client2.default.findAll);
clientRouter.route('/:id').get(_client2.default.findOne).delete(_client2.default.deleteClient).put(_client2.default.updateClient);