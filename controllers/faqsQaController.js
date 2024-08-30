const faqsQaModel = require('../models/faqsQa');

exports.createfaqsQa = async (req, res) => {
    try {
  
      const faqsQa = await new faqsQaModel(req.body).save();
      res.status(201).json({ message: 'Faqs Question Answer created successfully', faqsQa });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to create Faqs Question Answer', error: err.message });
    }
  };

  // Get All Faqs Question Answer
exports.getAllfaqsQa = async (req, res) => {
    try {
      const faqsQa = await faqsQaModel.find();
      res.status(200).json(faqsQa);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve Faqs Question Answer', error: err.message });
    }
  };
  
  // Get Faqs Question Answer by ID
  exports.getfaqsQaById = async (req, res) => {
    try {
      const faqsQa = await faqsQaModel.findById(req.params.id);
      if (!faqsQa) return res.status(404).json({ message: 'Faqs Question Answer not found' });
      res.status(200).json(faqsQa);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve the Faqs Question Answer', error: err.message });
    }
  };
  
  // Update Faqs Question Answer
  exports.updatefaqsQa = async (req, res) => {
    try {
      const updatedfaqsQa = await faqsQaModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedfaqsQa) return res.status(404).json({ message: 'Faqs Question Answer not found' });
      res.status(200).json({ message: 'Faqs Question Answer updated successfully', updatedfaqsQa });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to update the Faqs Question Answer', error: err.message });
    }
  };
  
  // Delete Faqs Question Answer
  exports.deletefaqsQa = async (req, res) => {
    try {
      const deletedfaqsQa = await faqsQaModel.findByIdAndDelete(req.params.id);
      if (!deletedfaqsQa) return res.status(404).json({ message: 'Faqs Question Answer not found' });
      res.status(200).json({ message: 'Faqs Question Answer deleted successfully' });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to delete the Faqs Question Answer', error: err.message });
    }
  };
  