const mongoose = require('mongoose');

const faqsCategorySchema = new mongoose.Schema({


    categoryName: {
        type: String,
    },

});

module.exports = mongoose.model('faqsCategory', faqsCategorySchema);
