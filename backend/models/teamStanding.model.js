import mongoose from 'mongoose';

const teamStandingSchema = new mongoose.Schema({
  position: Number,
  team: String,
  points: Number
});

export default mongoose.model('TeamStanding', teamStandingSchema, 'teamstandings');
