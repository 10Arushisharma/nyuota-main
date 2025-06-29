// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo connected');
  } catch (error) {
    console.error('Monog not connected: ', error);
    process.exit(1);
  }
};

export default connectDB;
