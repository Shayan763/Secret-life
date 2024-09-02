const express = require('express');
const cancelledUserscontroller = require('../controllers/cancelledUserscontroller');
const router = express.Router();



// Get All Cancelled Users
router.get('/', cancelledUserscontroller.getAllcancelledUser);

// Get Cancellled Users by ID
router.get('/:id', cancelledUserscontroller.getcancelledUserById);


// Delete Cancelled Users
router.delete('/:id', cancelledUserscontroller.deletedcancelledUser);

module.exports = router;
