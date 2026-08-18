import { Schema, model } from 'mongoose';

export interface ITeam {
  name: string;
  members: string[];
}

const teamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true, unique: true },
    members: [{ type: String }],
  },
  { timestamps: true },
);

export default model<ITeam>('Team', teamSchema);
