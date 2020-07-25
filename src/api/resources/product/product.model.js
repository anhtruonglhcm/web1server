import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;
const ProductSchema = Schema({
    name: { type: String, required: true },
    slug: String,
    product_cate: { type: Schema.Types.ObjectId, required: true, ref: 'ProductCate' },
    photo: String,
    price: Number,
    status: Boolean,
    is_home: Boolean,
    position: Number,
    intro: String,
    description: String,

})
ProductSchema.plugin(mongoosePaginate)
export default mongoose.model('Product', ProductSchema)