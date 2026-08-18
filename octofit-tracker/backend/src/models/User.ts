import { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  age?: number;
  team?: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    team: { type: String },
  },
  { timestamps: true },
);

export default model<IUser>('User', userSchema);
