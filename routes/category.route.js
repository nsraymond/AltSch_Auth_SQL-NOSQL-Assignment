const express = require('express')
const controller = require('../controllers/category.controller')
const authenticateToken = require('../middleware/authenticate.token')

const categoryRoute = express.Router()

categoryRoute.get('/', authenticateToken, controller.getAllCategories)
categoryRoute.get('/:id', authenticateToken, controller.getOneCategory)
categoryRoute.post('/', authenticateToken, controller.createCategory)
categoryRoute.patch('/:id', authenticateToken, controller.updateCategory)
categoryRoute.delete('/:id', authenticateToken, controller.deleteCategory)

module.exports = categoryRoute;