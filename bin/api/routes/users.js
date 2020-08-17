const express = require('express');
const router = express.Router();

const users_controller = require('../controllers/users/users');

router.get('/getAllUsers', users_controller.get_users);

module.exports = router;
