const express = require('express')
const controller = require('../controllers/product.controller')
const authenticateToken = require('../middleware/authenticate.token')

const productRoute = express.Router()

productRoute.get('/', authenticateToken, controller.getAllProducts)
productRoute.get('/:id', authenticateToken, controller.getOneProduct)
productRoute.post('/', authenticateToken, controller.createProduct)
productRoute.patch('/:id', authenticateToken, controller.updateProduct)
productRoute.delete('/:id', authenticateToken, controller.deleteProduct)

module.exports = productRoute;