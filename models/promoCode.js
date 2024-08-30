const mongoose = require('mongoose');

const promoCodeSchema = new mongoose.Schema({


    promoCodename: {
        type: String,
    },
    
    promoCodediscount: {
        type: String,
    },

    startDate: {
        type: Date,
    },

    expireDate: {
        type: Date,
    },

});

module.exports = mongoose.model('promoCode', promoCodeSchema);
