const mongoose = require('mongoose');

const series_bookSchema = new mongoose.Schema({


    BookName: {
        type: String,
    },

    category: {
        type: String,
    },

    series: {
        type: String,
    },

    bookDownload: {
        type: Number,
        default: '0',
    },
    
    bookRead: {
        type: Number,
        default: '0',
    },
    
});

module.exports = mongoose.model('series_book', series_bookSchema);
