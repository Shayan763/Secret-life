const express = require('express');
const notificationsController = require('../controllers/notificationsController');
const router = express.Router();

// Create categorie
router.post('/', notificationsController.createnotification);

// Get All categorie
router.get('/', notificationsController.getAllnotification);

// Get categorie by ID
router.get('/:id', notificationsController.getnotificationById);


// Delete categorie
router.delete('/:id', notificationsController.deletenotification);

module.exports = router;
