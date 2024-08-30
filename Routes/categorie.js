const express = require('express');
const categorieController = require('../controllers/categorieController');
const User = require("../models/categorie");
const router = express.Router();

// Create categorie
router.post('/', categorieController.createCategorie);

// Get All categorie
router.get('/', categorieController.getAllcategorie);

// Get categorie by ID
router.get('/:id', categorieController.getcategorieById);


// Delete categorie
router.delete('/:id', categorieController.deletecategorie);

module.exports = router;
