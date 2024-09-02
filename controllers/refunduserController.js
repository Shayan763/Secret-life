const refundUsermodel = require('../models/refundUser');

// Create refund user
exports.createrefundUser = async (req, res) => {
  try {

    const refundUser = await new refundUsermodel(req.body).save();
    res.status(201).json({ message: 'refundUser created successfully', refundUser });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create redund user', error: err.message });
  }
};

// Get All Refund user
exports.getAllrefundUser = async (req, res) => {
  try {
    const refundUser = await refundUsermodel.find();
    res.status(200).json(refundUser);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve refund user', error: err.message });
  }
};

// Get Refund user by ID
exports.getrefunduserById = async (req, res) => {
  try {
    const refundUser = await refundUsermodel.findById(req.params.id);
    if (!refundUser) return res.status(404).json({ message: 'Refund users not found' });
    res.status(200).json(refundUser);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve the refund user', error: err.message });
  }
};

// Update Refund User
exports.updaterefunduser = async (req, res) => {
  try {
    const updatedrefunduser = await refundUsermodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedrefunduser) return res.status(404).json({ message: 'Refund User not found' });
    res.status(200).json({ message: 'Refund user updated successfully', updatedrefunduser });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update the refund user', error: err.message });
  }
};

// Delete Refund User
exports.deleterefunduser = async (req, res) => {
  try {
    const deletedrefunduser = await refundUsermodel.findByIdAndDelete(req.params.id);
    if (!deletedrefunduser) return res.status(404).json({ message: 'Refund user not found' });
    res.status(200).json({ message: 'Refund user deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete the refund user', error: err.message });
  }
};
