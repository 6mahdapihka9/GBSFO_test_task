import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
  email: string;
  _id: string;
  passwordHash: string;
  name: string;
}

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      unique: true
    },
  },
  {
    timestamps: true
  }
)

schema.pre('save', async function (next) {
  const user = this;
  if (!this.isNew) {
    return next();
  }
  if (user.passwordHash) {
    user.passwordHash = await bcrypt.hash(user.passwordHash, 10);
    next();
  } else {
    next();
  }
});

schema.methods.isValidPassword = async function (password: string) {
  const user = this;
  return await bcrypt.compare(password, user.passwordHash);
}

export default mongoose.model<IUser>('User', schema);
