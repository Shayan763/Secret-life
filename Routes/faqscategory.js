const express = require('express');
const faqsCategoryController = require('../controllers/faqsCategoryController');
const router = express.Router();

// Create categorie
router.post('/', faqsCategoryController.createfaqsCategory);

// Get All categorie
router.get('/', faqsCategoryController.getAllfaqsCategory);

// Get categorie by ID
router.get('/:id', faqsCategoryController.getfaqsCategoryById);


// Delete categorie
router.delete('/:id', faqsCategoryController.deletefaqsCategory);

module.exports = router;
