const mongoose = require('mongoose');

const refundUserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        default: null
    },

    lastName: {
        type: String,
        default: null
    },

    joiningDate: {
        type: Date,
        default: Date.now,
    },

    gender: {
        type: String,
    },

    booksdownloadAvailable: {
        type: String,
    },

    audiobooksdownloadAvailable: {
        type: String,
    },

    email: {
        type: String,
        unique: true,
    },

    name: {
        type: String,
    },

    paymentPlan: {
        type: String,
    },

    subjectPlan: {
        type: String,
    },

    messageSenddate: {
        type: Date,
        default: Date.now,
    },

    userMessage: {
        type: String,
    },
});

// Create the User model from the schema
const User = mongoose.model('refundUser', refundUserSchema);

module.exports = User;
