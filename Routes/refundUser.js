const express = require('express');
const refunduserController = require('../controllers/refunduserController');
const router = express.Router();

// Create Promo code
router.post('/', refunduserController.createrefundUser);

// Get All Promo code
router.get('/', refunduserController.getAllrefundUser);

// Get Promo code by ID
router.get('/:id', refunduserController.getrefunduserById);


// Delete Promo code
router.delete('/:id', refunduserController.deleterefunduser);

module.exports = router;
