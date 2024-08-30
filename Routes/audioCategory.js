const express = require('express');
const audiocategorieController = require('../controllers/audioCategorieController');

const router = express.Router();

// Create Audio Book
router.post('/', audiocategorieController.createAudioCategorie);

// Get All Audio Books
router.get('/', audiocategorieController.getAllaudiocategorie);

// Get Audio Book by ID
router.get('/:id', audiocategorieController.getaudiocategorieById);

// Delete Audio Book
router.delete('/:id', audiocategorieController.deleteaudiocategorie);

module.exports = router;
