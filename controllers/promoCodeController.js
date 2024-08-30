const promoCodeModel = require("../models/promoCode");

exports.createpromoCode = async (req, res) => {
  try {
    let startDate = new Date(req.body.startDate);
    let expireDate = new Date(req.body.expireDate);
    req.body.startDate=startDate
    req.body.expireDate=expireDate
    console.log(startDate,expireDate)
    // req.body.expireDate = new Date(req.body.expireDate);
    const promoCode = await new promoCodeModel(req.body).save();
    res
      .status(201)
      .json({ message: "Promo code created successfully", promoCode });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to create Promo code", error: err.message });
  }
};

// Get All Promo code
exports.getAllpromoCode = async (req, res) => {
  try {
    const promoCode = await promoCodeModel.find();
    res.status(200).json(promoCode);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to retrieve payment", error: err.message });
  }
};

// Get Promo code by ID
exports.getpromoCodeById = async (req, res) => {
  try {
    const promoCode = await promoCodeModel.findById(req.params.id);
    if (!promoCode)
      return res.status(404).json({ message: "Promo code not found" });
    res.status(200).json(promoCode);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to retrieve the Promo code",
      error: err.message,
    });
  }
};

// Update Promo code
exports.updatedpromoCode = async (req, res) => {
  try {
    const updatedpromoCode = await promoCodeModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedpromoCode)
      return res.status(404).json({ message: "Promo code not found" });
    res
      .status(200)
      .json({ message: "Promo code updated successfully", updatedpromoCode });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to update the Promo code", error: err.message });
  }
};

// Delete Promo code
exports.deletedpromoCode = async (req, res) => {
  try {
    const deletedpromoCode = await promoCodeModel.findByIdAndDelete(
      req.params.id
    );
    if (!deletedpromoCode)
      return res.status(404).json({ message: "Promo code not found" });
    res.status(200).json({ message: "Promo code deleted successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Failed to delete the Promo code", error: err.message });
  }
};
