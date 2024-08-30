const express = require('express');
const bookController = require('../controllers/bookController');
const User = require("../models/book");
const router = express.Router();

// Create Book
router.post('/', bookController.createBook);

// Get All Books
router.get('/', bookController.getAllBooks);

// Get Book by ID
router.get('/:id', bookController.getBookById);

// Update Book
router.put('/:id', bookController.updateBook);

// Delete Book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
