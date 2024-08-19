import Booking from "../models/Booking.js"

const postApiBooking = async (req,res) => {
    const {user, bus , contactNumber, seatNumber, date, isconfirmed, from , to}=req.body;
    const booking = Booking ({
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
        Message: "Booking Saved Succesfully"
    });
} catch (err){
    res.status(500).json({
        success: false,
        Message: err.message,
    });
}
};
export { postApiBooking };