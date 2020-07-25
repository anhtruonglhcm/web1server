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

var ProductSchema = Schema({
    name: { type: String, required: true },
    slug: String,
    product_cate: { type: Schema.Types.ObjectId, required: true, ref: 'ProductCate' },
    photo: String,
    price: Number,
    status: Boolean,
    is_home: Boolean,
    position: Number,
    intro: String,
    description: String

});
ProductSchema.plugin(_mongoosePaginateV2.default);
exports.default = _mongoose2.default.model('Product', ProductSchema);