import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

app.use(express.json());

const connDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URI);

    if (conn) {
      console.log("MongoDB connected successfully👌");
    }

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

connDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
