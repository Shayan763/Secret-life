const mongoose = require('mongoose');

const CategorieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model('categorie', CategorieSchema);
