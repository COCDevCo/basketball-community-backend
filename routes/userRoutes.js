const express = require('express');
const router = express.Router();
const { getUserById, registerUser } = require('../controllers/userController');

// Get a user by ID
router.get('/:id', getUserById);

// Register a new user
router.post('/', registerUser);

module.exports = router;
