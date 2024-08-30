const express = require('express');
const faqsQaController = require('../controllers/faqsQaController');
const router = express.Router();

// Create categorie
router.post('/', faqsQaController.createfaqsQa);

// Get All categorie
router.get('/', faqsQaController.getAllfaqsQa);

// Get categorie by ID
router.get('/:id', faqsQaController.getfaqsQaById);


// Delete categorie
router.delete('/:id', faqsQaController.deletefaqsQa);

module.exports = router;
