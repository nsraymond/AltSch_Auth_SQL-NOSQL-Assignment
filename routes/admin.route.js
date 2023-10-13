const express = require('express')
const controller = require('../controllers/admin.controller')
const authenticateToken = require('../middleware/authenticate.token')

const adminRoute = express.Router()

adminRoute.get('/', authenticateToken, controller.getAllAdmins)
adminRoute.get('/:id', authenticateToken, controller.getOneAdmin)
adminRoute.post('/', authenticateToken, controller.createAdmin)
adminRoute.patch('/:id', authenticateToken, controller.updateAdmin)
adminRoute.delete('/:id', authenticateToken, controller.deleteAdmin)

module.exports = adminRoute;