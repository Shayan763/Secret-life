const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({

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
        default: 'no buy plan',
    },

    audiobooksdownloadAvailable: {
        type: String,
        default: 'no buy plan',
    },

    email: {
        type: String,
        unique: true,
        required: true, // Ensure email is always provided
    },

    password: {
        type: String,
        required: true, // Password is required
    },

    location: {
        type: String,
        default: null
    },

    paymentplans: {
        type: String,
        default: 'no buy plan',
    },
});

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
