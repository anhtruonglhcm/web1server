'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginateV = require('mongoose-paginate-v2');

var _mongoosePaginateV2 = _interopRequireDefault(_mongoosePaginateV);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var InvoiceSchema = new Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
  qty: Number,
  date: Date,
  client: { type: Schema.Types.ObjectId, required: true, ref: 'Client' }
});
InvoiceSchema.plugin(_mongoosePaginateV2.default);
exports.default = _mongoose2.default.model('Invoice', InvoiceSchema);