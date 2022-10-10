import mongoose, { Schema } from 'mongoose';

export interface IPassword extends Document {
  _id: string;
  name: string;
  value: string;
  author: mongoose.Types.ObjectId;
}

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  },
  {
    timestamps: true
  }
);


export default mongoose.model<IPassword>('Password', schema);
