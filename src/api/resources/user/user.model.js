import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;
const UserScheam = Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: true },
});
UserScheam.pre('save', async function hashPassword() {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
});
export default mongoose.model('User', UserScheam);
