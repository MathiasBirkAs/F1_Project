import mongoose from 'mongoose';

const driverStandingSchema = new mongoose.Schema({
  position: Number,
  driver: String,
  nationality: String,
  car: String,
  points: Number
  // Add flag if you want, e.g.: flag: String
});

export default mongoose.model('DriverStanding', driverStandingSchema, 'driverstandings');
