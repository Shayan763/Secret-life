const contactUsModel = require('../models/contactUs');

exports.createcontactUs = async (req, res) => {
    try {
  
      const createcontactUs = await new contactUsModel(req.body).save();
      res.status(201).json({ message: 'Contact Us created successfully', createcontactUs });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to create Contact Us', error: err.message });
    }
  };

  // Get All Contact Us
exports.getAllcontactUs = async (req, res) => {
    try {
      const createcontactUs = await contactUsModel.find();
      res.status(200).json(createcontactUs);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve Contact Us', error: err.message });
    }
  };
  
  // Get Contact Us by ID
  exports.getcontactUsById = async (req, res) => {
    try {
      const createcontactUs = await contactUsModel.findById(req.params.id);
      if (!createcontactUs) return res.status(404).json({ message: 'Contact Us not found' });
      res.status(200).json(createcontactUs);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve the Contact Us', error: err.message });
    }
  };
  
  // Update Contact Us
  exports.updatecontactUs = async (req, res) => {
    try {
      const updatedcreatecontactUs = await contactUsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedcreatecontactUs) return res.status(404).json({ message: 'Contact Us not found' });
      res.status(200).json({ message: 'Contact Us updated successfully', updatedcreatecontactUs });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to update the Contact Us', error: err.message });
    }
  };
  
  // Delete Contact Us
  exports.deletecontactUs = async (req, res) => {
    try {
      const deletedcreatecontactUs = await contactUsModel.findByIdAndDelete(req.params.id);
      if (!deletedcreatecontactUs) return res.status(404).json({ message: 'Contact Us not found' });
      res.status(200).json({ message: 'Contact Us deleted successfully' });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to delete the Contact Us', error: err.message });
    }
  };
  