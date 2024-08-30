const mongoose = require('mongoose');

const faqsQaSchema = new mongoose.Schema({


    faqsCategory: {
        type: String,
    },

    faqsQuestion: {
        type: String,
    },

    faqsAnswer: {
        type: String,
    },

});

module.exports = mongoose.model('faqsQa', faqsQaSchema);
