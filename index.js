import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { getApiHealth } from './controller/health.js';
import {postApiBooking} from './controller/booking.js';



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

app.get("/api/v1/health", getApiHealth);

app.post("/api/v1/bookings", postApiBooking);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
