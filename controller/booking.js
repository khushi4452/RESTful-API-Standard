import Booking from "../models/Booking.js";

const postApiBooking = async (req, res) => {
    const { user, bus, contactNumber, seatNumber, date, isConfirmed, from, to } = req.body; 

    const booking = new Booking({  
        user,
        bus,
        contactNumber,
        seatNumber,
        date,
        isConfirmed,  
        from,
        to,
    });

    try {
        const savedBooking = await booking.save();
        res.status(200).json({
            success: true,
            data: savedBooking,
            message: "Booking Saved Successfully", 
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message, 
        });
    }
};

const getApiBookings = async (req, res) => {
    try {
        const allBookings = await Booking.find().populate("user bus");
        allBookings.forEach((booking) => {
            booking.user.password = undefined;
        });
        res.status(200).json({
            success: true,
            data: allBookings,
            message: "Bookings Found Successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Server Error",
        });
    }
};

export { postApiBooking, getApiBookings };
