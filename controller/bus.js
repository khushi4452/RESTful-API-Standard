import Bus from "../models/Bus.js";
const postApiv1Busses = async (req , res) =>{
    const {busNo , busType , seatType } = req.body;
   const bus = new bus ({
    busNo ,
    busType ,
    seatType,
   });
 try {
    const SavedBus = await bus.save();
    res.status(200).json({
        success : true,
        data: SavedBus,
        message: "Bus saved successfully",
    });
 }  catch (error) {
    res.status(422).json({
        success: false,
        message: error.message,
    });
 }
};

const postApiv2Busses = aync (req,res)=>{
    const { busNo,
      busType,
      seatType,
      totalSeatCount ,} = req.body;

      const bus = new Bus ({
      busNo,
      busType,
      seatType,
      totalSeatCount,
        });

  try {
    const savedBus = await bus.save();
    res.status(200).json({
    success: true,
    data: savedBus,
    message: "Bus saved successfully",
 });
  } catch (error) {
    res.status(422).json({
    success: false,
     message: error.message,
 });
 }
        
};
 export { postApiv1Busses, postApiv2Busses }

