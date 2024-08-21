import { Schema, model } from "mongoose";
const busSchema = new Schema (
    {
   busNo:{
   type: String,
   required: true,
   enum : ["111","654","786","999"],
   },
   
   seatType:{
    type: String,
    enum:["seater", "sleeper"],
   },
   busType: {
    type: String,
    enum : ["ac","nonac"],
   },
   totalSeatCount: {
    type: Number,
   },
  },
  {
    timestamps: true,
  }
);
const Bus = model("Bus", busSchema);
export default Bus;