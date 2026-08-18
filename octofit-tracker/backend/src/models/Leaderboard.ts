import { Schema, model } from 'mongoose';

export interface ILeaderboardEntry {
  user: string;
  team: string;
  points: number;
  rank: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    user: { type: String, required: true },
    team: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true },
);

export default model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
