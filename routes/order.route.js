const express = require('express')
const controller = require('../controllers/order.controller')
const authenticateToken = require('../middleware/authenticate.token')

const orderRoute = express.Router()

orderRoute.get('/', authenticateToken, controller.getAllOrders)
orderRoute.get('/:id', authenticateToken, controller.getOneOrder)
orderRoute.post('/', authenticateToken, controller.createOrder)
orderRoute.patch('/:id', authenticateToken, controller.updateOrder)
orderRoute.delete('/:id', authenticateToken, controller.deleteOrder)

module.exports = orderRoute;