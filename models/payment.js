const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({


    paymentPlanname: {
        type: String,
    },
    
    paymentDescription: {
        type: String,
    },

    cutPrice: {
        type: Number,
    },

    actualprice: {
        type: Number,
    },

});

module.exports = mongoose.model('Payment', paymentSchema);
