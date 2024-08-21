import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import { getApiHealth } from './controller/health.js';
import { postApiBooking, getApiBookings } from './controller/booking.js';
import { postApiv1Busses,
   postApiv2Busses }
  from "./controller/bus.js";
  
import {
  postApiv1User,
  putApiv1User,
  patchApiv1User,
  DeleteApiv1User,
} from "./controller/user.js";


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

app.get("/api/v1/bookings", getApiBookings);
app.post("/api/v1/busses", postApiv1Busses);
app.post("/api/v2/busses", postApiv2Busses);

app.post("/api/v1/users", postApiv1User);
app.put("/api/v1/users/:id", putApiv1User);
app.patch("/api/v1/users/:id", patchApiv1User);
app.delete("/api/v1/users/:id", DeleteApiv1User);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
