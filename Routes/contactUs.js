const express = require('express');
const contactUsController = require('../controllers/contactUsController');
const router = express.Router();

// Create categorie
router.post('/', contactUsController.createcontactUs);

// Get All categorie
router.get('/', contactUsController.getAllcontactUs);

// Get categorie by ID
router.get('/:id', contactUsController.getAllcontactUs);


// Delete categorie
router.delete('/:id', contactUsController.deletecontactUs);

module.exports = router;
