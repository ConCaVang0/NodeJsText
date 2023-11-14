import dotenv from 'dotenv';
import app from './src/app';
import mongoose from 'mongoose';

dotenv.config();
const PORT = process.env.PORT || 9000;

const mongooseDbOptions = {
    autoIndex: true, 
    maxPoolSize: 10, 
    serverSelectionTimeoutMS: 5000, 
    socketTimeoutMS: 45000, 
    family: 4, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose
    .connect('mongodb://localhost:27017/NodejsTest', mongooseDbOptions)
    .then(() => {
       console.log('⚡️[MongoDB]: Connected successfully');
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
      console.error('Failed to Connect to MongoDB', err);
    });

