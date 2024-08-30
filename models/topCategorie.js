const mongoose = require('mongoose');

const topCategorySchema = new mongoose.Schema({
    name: {
         type: String,
        
    },
    type: {
         type: String,
        
     }, // e.g., 'audio', 'book'
    clickCount: {
         type: Number,
         default: 0,
         },
});

const Topcategory = mongoose.model('topCategorySchema', topCategorySchema);

module.exports = Topcategory;
