const notificationModel = require('../models/notification');

exports.createnotification = async (req, res) => {
    try {
  
      const notification = await new notificationModel(req.body).save();
      res.status(201).json({ message: 'Notification created successfully', notification });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to create Notification', error: err.message });
    }
  };

  // Get All Notification
exports.getAllnotification = async (req, res) => {
    try {
      const notification = await notificationModel.find();
      res.status(200).json(notification);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve Notification', error: err.message });
    }
  };
  
  // Get Notification by ID
  exports.getnotificationById = async (req, res) => {
    try {
      const notification = await notificationModel.findById(req.params.id);
      if (!notification) return res.status(404).json({ message: 'Notification not found' });
      res.status(200).json(notification);
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to retrieve the Notification', error: err.message });
    }
  };
  
  // Update Notification
  exports.updatenotification = async (req, res) => {
    try {
      const updatednotification = await notificationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatednotification) return res.status(404).json({ message: 'Notification not found' });
      res.status(200).json({ message: 'Notification updated successfully', updatednotification });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to update the Notification', error: err.message });
    }
  };
  
  // Delete Notification
  exports.deletenotification = async (req, res) => {
    try {
      const deletednotification = await notificationModel.findByIdAndDelete(req.params.id);
      if (!deletednotification) return res.status(404).json({ message: 'Notification not found' });
      res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Failed to delete the Notification', error: err.message });
    }
  };
  