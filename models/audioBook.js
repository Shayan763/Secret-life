const mongoose = require('mongoose');

const AudioBookSchema = new mongoose.Schema({


    BookName: {
        type: String,
    },

    authorName: {
        type: String,
    },

    bookDownload: {
        type: Number,
        default: '0',
    },
    
    bookListen: {
        type: Number,
        default: '0',
    },
    
});

module.exports = mongoose.model('AudioBook', AudioBookSchema);
