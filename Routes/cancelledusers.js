const express = require('express');
const cancelledUserscontroller = require('../controllers/cancelledUserscontroller');
const router = express.Router();



// Get All Users
router.get('/', cancelledUserscontroller.getAllcancelledUser);

// Get Users by ID
router.get('/:id', cancelledUserscontroller.getcancelledUserById);


// Delete Users
router.delete('/:id', cancelledUserscontroller.deletedcancelledUser);

module.exports = router;
