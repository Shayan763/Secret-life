const express = require('express');
const promoCodeController = require('../controllers/promoCodeController');
const router = express.Router();

// Create Promo code
router.post('/', promoCodeController.createpromoCode);

// Get All Promo code
router.get('/', promoCodeController.getAllpromoCode);

// Get Promo code by ID
router.get('/:id', promoCodeController.getpromoCodeById);


// Delete Promo code
router.delete('/:id', promoCodeController.deletedpromoCode);

module.exports = router;
