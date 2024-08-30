const mongoose = require('mongoose');

const cancelledUserSchema = new mongoose.Schema({


    user: {
        type: String,
    },

    email: {
        type: String,
    },

    gender: {
        type: String,
    },

    geo: {
        type: Number,
    },
    
    cancelDate: {
        type: Date,
    },

    isTerminated: {
        type: Boolean,
    },
});

module.exports = mongoose.model('cancelledUser', cancelledUserSchema);

