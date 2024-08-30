const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({


    addTitle: {
        type: String,
    },

    selectDate: {
        type: Date,
    },

    addDescription: {
        type: String,
    },

});

module.exports = mongoose.model('notification', notificationSchema);
