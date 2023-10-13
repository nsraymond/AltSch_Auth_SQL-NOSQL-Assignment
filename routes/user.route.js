const express = require('express')
const controller = require('../controllers/user.controller')
const authenticateToken = require('../middleware/authenticate.token')

const userRoute = express.Router()

userRoute.get('/', authenticateToken, controller.getAllUsers)
userRoute.get('/:id', authenticateToken, controller.getOneUser)
userRoute.post('/', authenticateToken, controller.createUser)
userRoute.patch('/:id', authenticateToken, controller.updateUser)
userRoute.delete('/:', authenticateToken, controller.deleteUser)


module.exports = userRoute;