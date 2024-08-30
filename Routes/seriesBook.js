const express = require('express');
const seriesBookController = require('../controllers/seriesBookController');
const seriesBook = require("../models/seriesBook");
const router = express.Router();

// Create Book
router.post('/', seriesBookController.createseriesBook);

// Get All Books
router.get('/', seriesBookController.getAllBooks);

// Get Book by ID
router.get('/:id', seriesBookController.getBookById);

// Delete Book
router.delete('/:id', seriesBookController.deleteBook);

module.exports = router;
