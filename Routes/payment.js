const express = require('express');
const paymentController = require('../controllers/paymentController');
const User = require("../models/payment");
const router = express.Router();

// Create Book
router.post('/', paymentController.createpayment);

// Get All Books
router.get('/', paymentController.getAllpayment);

// Get Book by ID
router.get('/:id', paymentController.getpaymentById);

// Update Book
router.put('/:id', paymentController.updatedpayment);

// Delete Book
router.delete('/:id', paymentController.deletedpayment);

module.exports = router;
