const faqsCategoryModel = require('../models/faqsCategory');

exports.createfaqsCategory = async (req, res) => {
    try {
  
      const faqsCategory = await new faqsCategoryModel(req.body).save();
      res.status(201).json({ message: 'Faqs category created successfully', faqsCategory });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to create Faqs category', error: err.message });
    }
  };

  // Get All Faqs category
exports.getAllfaqsCategory = async (req, res) => {
    try {
      const faqsCategory = await faqsCategoryModel.find();
      res.status(200).json(faqsCategory);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve Faqs category', error: err.message });
    }
  };
  
  // Get Faqs category by ID
  exports.getfaqsCategoryById = async (req, res) => {
    try {
      const faqsCategory = await faqsCategoryModel.findById(req.params.id);
      if (!faqsCategory) return res.status(404).json({ message: 'Faqs category not found' });
      res.status(200).json(faqsCategory);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve the Faqs category', error: err.message });
    }
  };
  
  // Update Faqs category
  exports.updatefaqsCategory = async (req, res) => {
    try {
      const updatedfaqsCategory = await faqsCategoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedfaqsCategory) return res.status(404).json({ message: 'Faqs category not found' });
      res.status(200).json({ message: 'Faqs category updated successfully', updatedfaqsCategory });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to update the Faqs category', error: err.message });
    }
  };
  
  // Delete Faqs category
  exports.deletefaqsCategory = async (req, res) => {
    try {
      const deletedfaqsCategory = await faqsCategoryModel.findByIdAndDelete(req.params.id);
      if (!deletedfaqsCategory) return res.status(404).json({ message: 'Faqs category not found' });
      res.status(200).json({ message: 'Faqs category deleted successfully' });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to delete the Faqs category', error: err.message });
    }
  };
  