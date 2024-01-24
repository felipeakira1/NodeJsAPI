const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router .post('/', userController.addUser);

module.exports = router;