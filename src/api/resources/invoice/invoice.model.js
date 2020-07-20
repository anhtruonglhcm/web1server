import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;
const InvoiceSchema = new Schema({
  item: { type: String, required: true },
  price: { type: Number, required: true },
  qty: Number,
  date: Date,
  client: { type: Schema.Types.ObjectId, required: true, ref: 'Client' },
});
InvoiceSchema.plugin(mongoosePaginate);
export default mongoose.model('Invoice', InvoiceSchema);
