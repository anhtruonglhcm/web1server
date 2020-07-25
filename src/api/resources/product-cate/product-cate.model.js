import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const { Schema } = mongoose;
const ProductCateSchema = Schema({
    name: String,
    photo: String,
    description: String,
    status: Boolean,
    position: Number,
})
ProductCateSchema.plugin(mongoosePaginate);
export default mongoose.model('ProductCate', ProductCateSchema);