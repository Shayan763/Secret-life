const mongoose = require('mongoose');

const AudioCategorieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model('AudioCategorie', AudioCategorieSchema);
