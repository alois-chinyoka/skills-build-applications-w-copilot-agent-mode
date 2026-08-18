import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany([
      { name: 'Blue Falcons', members: ['Jordan Lee', 'Priya Patel'] },
      { name: 'Red Hawks', members: ['Sam Rivera', 'Casey Kim'] },
    ]);

    await User.insertMany([
      { name: 'Jordan Lee', email: 'jordan.lee@octofit.test', age: 28, team: 'Blue Falcons' },
      { name: 'Priya Patel', email: 'priya.patel@octofit.test', age: 24, team: 'Blue Falcons' },
      { name: 'Sam Rivera', email: 'sam.rivera@octofit.test', age: 31, team: 'Red Hawks' },
      { name: 'Casey Kim', email: 'casey.kim@octofit.test', age: 26, team: 'Red Hawks' },
    ]);

    await Activity.insertMany([
      { user: 'Jordan Lee', type: 'Running', durationMinutes: 30, caloriesBurned: 320, date: new Date('2026-08-10') },
      { user: 'Priya Patel', type: 'Cycling', durationMinutes: 45, caloriesBurned: 410, date: new Date('2026-08-11') },
      { user: 'Sam Rivera', type: 'Swimming', durationMinutes: 40, caloriesBurned: 380, date: new Date('2026-08-12') },
      { user: 'Casey Kim', type: 'Yoga', durationMinutes: 25, caloriesBurned: 140, date: new Date('2026-08-13') },
    ]);

    await Leaderboard.insertMany([
      { user: 'Jordan Lee', team: 'Blue Falcons', points: 950, rank: 1 },
      { user: 'Sam Rivera', team: 'Red Hawks', points: 890, rank: 2 },
      { user: 'Priya Patel', team: 'Blue Falcons', points: 820, rank: 3 },
      { user: 'Casey Kim', team: 'Red Hawks', points: 760, rank: 4 },
    ]);

    await Workout.insertMany([
      {
        name: 'Morning 5K',
        description: 'A steady-paced 5 kilometer run to build endurance.',
        difficulty: 'beginner',
        durationMinutes: 30,
      },
      {
        name: 'Interval Cycling',
        description: 'High-intensity cycling intervals for cardio fitness.',
        difficulty: 'intermediate',
        durationMinutes: 45,
      },
      {
        name: 'Full Body Strength',
        description: 'Compound lifts targeting all major muscle groups.',
        difficulty: 'advanced',
        durationMinutes: 60,
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
