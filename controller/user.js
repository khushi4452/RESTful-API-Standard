import User from "./../models/User.js";

const postApiv1User = async (req, res) => {
  const { userName, email, password } = req.body;
  const user = User({
    userName,
    email,
    password,
  });


  try {
    const savedUser = await user.save();
    res.status(200).json({
      success: true,
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


const putApiv1User = async (req, res) => {
  const { id } = req.params;
  const { userName, email, password } = req.body;

 try {
 const updateUser = await User.findOneAndUpdate(
  { _id: id },
  { $set: { userName, email, password } },
  { new: true }
 );

 if (updateUser) {
 res.status(200).json({
 success: true,
 data: updateUser,
  message: "Updated user successfully",
      });


 } else {
 res.status(404).json({
 success: false,
  message: "User not found",
   });
 }
 } catch (err) {
 res.status(500).json({
  success: false,
  message: err.message,
    });
  }
};

const patchApiv1User = async (req, res) => {
  const { id } = req.params;
  const { userName, email, password } = req.body;

  try {
    const updateUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: { userName, email, password } },
      { new: true }
    );

    if (updateUser) {
      res.status(200).json({
        success: true,
        data: updateUser,
        message: "Updated user successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
const DeleteApiv1User = async (req, res) => {
  const { id } = req.params;

  try {
    const deletionResult = await User.deleteOne({ _id: id });

    if (deletionResult.deletedCount === 1) {
      return res.status(204).json({
        success: true,
        message: "User deleted successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export { postApiv1User, putApiv1User, patchApiv1User, DeleteApiv1User };