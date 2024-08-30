const paymentModel = require('../models/payment');

exports.createpayment = async (req, res) => {
    try {
  
      const payment = await new paymentModel(req.body).save();
      res.status(201).json({ message: 'Payment created successfully', payment });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to create payment', error: err.message });
    }
  };

  // Get All payment
exports.getAllpayment = async (req, res) => {
    try {
      const payment = await paymentModel.find();
      res.status(200).json(payment);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve payment', error: err.message });
    }
  };
  
  // Get payment by ID
  exports.getpaymentById = async (req, res) => {
    try {
      const payment = await paymentModel.findById(req.params.id);
      if (!payment) return res.status(404).json({ message: 'payment not found' });
      res.status(200).json(payment);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve the payment', error: err.message });
    }
  };
  
  // Update payment
  exports.updatedpayment = async (req, res) => {
    try {
      const updatedpayment = await paymentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedpayment) return res.status(404).json({ message: 'payment not found' });
      res.status(200).json({ message: 'payment updated successfully', updatedpayment });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to update the payment', error: err.message });
    }
  };
  
  // Delete payment
  exports.deletedpayment = async (req, res) => {
    try {
      const deletedpayment = await paymentModel.findByIdAndDelete(req.params.id);
      if (!deletedpayment) return res.status(404).json({ message: 'payment not found' });
      res.status(200).json({ message: 'payment deleted successfully' });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to delete the payment', error: err.message });
    }
  };
  