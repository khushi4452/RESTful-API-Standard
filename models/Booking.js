import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
    {
      user: {
     type: String,
     ref: "User",
     required: true,  
        },

       
     bus: {
    type: String,
    ref: "Bus",
     required: true, 
     },     

    contactNumber: {
     type: String,
     required: true,
     },

     seatNumber: {
     type: String,
     required: true,
     },

    date: {
     type: Date,
     required: true,
     },


    isConfirmed: {
    type: Boolean,
    default: false,
    },

    from: {
     type: String,
     required: true,
    },

     to: {
     type: String,
     required: true,
    },

    },
    { timestamps: true }
);

const Booking = model("Booking", bookingSchema);

export default Booking;
