const express = require('express');
const router = express.Router();
const topCategoriesController = require('../controllers/topCategoriesController');

// Route to get top 5 clickable categories
router.get('/top-categories', topCategoriesController.getTopCategories);

// Route to increment click count
router.post('/increment-click/:id', topCategoriesController.incrementClickCount);

module.exports = router;
