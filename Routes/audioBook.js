const express = require('express');
const audioBookController = require('../controllers/audioBookController');

const router = express.Router();

// Create Audio Book
router.post('/', audioBookController.createaudioBook);

// Get All Audio Books
router.get('/', audioBookController.getAllaudioBook);

// Get Audio Book by ID
router.get('/:id', audioBookController.getaudioBookById);

// Delete Audio Book
router.delete('/:id', audioBookController.deleteaudioBook);

module.exports = router;
