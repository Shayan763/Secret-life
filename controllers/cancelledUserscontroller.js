const cancelledUserModel = require("../models/cancelledUsers");
const User = require("../models/usermodel");


// Get All Cancelled user
exports.getAllcancelledUser = async (req, res) => {
  try {
    const cancelledUser = await cancelledUserModel.find();
    res.status(200).json(cancelledUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to retrieve Cancelled user", error: err.message });
  }
};

// Get Cancelled user by ID
exports.getcancelledUserById = async (req, res) => {
  try {
    const cancelledUser = await cancelledUserModel.findById(req.params.id);
    if (!cancelledUser)
      return res.status(404).json({ message: "Cancelled user not found" });
    res.status(200).json(cancelledUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to retrieve the Cancelled user",
      error: err.message,
    });
  }
};

// Update Cancelled user
exports.updatedcancelledUser = async (req, res) => {
  try {
    const updatedcancelledUser = await cancelledUserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedcancelledUser)
      return res.status(404).json({ message: "Cancelled user not found" });
    res
      .status(200)
      .json({ message: "Cancelled user updated successfully", cancelledUserCode });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to update the Cancelled user", error: err.message });
  }
};

// Delete Cancelled user
exports.deletedcancelledUser = async (req, res) => {
  try {
    const deletedcancelledUser = await User.findByIdAndDelete(
      req.params.id
    );
    if (!deletedcancelledUser)
      return res.status(404).json({ message: "Cancelled user not found" });
    res.status(200).json({ message: "Cancelled user deleted successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to delete the Promo code", error: err.message });
  }
};
