import mongoose from 'mongoose';

const raceResultSchema = new mongoose.Schema({
  grandPrix: String,
  date: String, // "YYYY-MM-DD"
  winner: String,
  car: String,
  laps: Number,
  time: String
});

export default mongoose.model('RaceResult', raceResultSchema, 'raceresults');
