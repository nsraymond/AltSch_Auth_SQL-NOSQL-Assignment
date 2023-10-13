const express = require('express');
const authRoute = express.Router();
const controller = require('../controllers/auth.controller');

authRoute.post('/signup', controller.signup);
authRoute.post('/login', controller.login);

module.exports = authRoute;
