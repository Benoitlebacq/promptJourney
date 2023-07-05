import mongoose from 'mongoose';
let isConneceted = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConneceted) {
    console.log('connecté');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: '',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConneceted = true;
  } catch (error) {
    console.log('error :::::', error);
  }
};
