const express = require('express')
const controller = require('../controllers/client.controller')
const authenticateToken = require('../middleware/authenticate.token')

const clientRoute = express.Router()

clientRoute.get('/', authenticateToken, authenticateToken, controller.getAllClients)
clientRoute.get('/:id', authenticateToken, authenticateToken, controller.getOneClient)
clientRoute.post('/', authenticateToken, controller.createClient)
clientRoute.patch('/:id', authenticateToken, authenticateToken, controller.updateClient)
clientRoute.delete('/:id', authenticateToken, authenticateToken, controller.deleteClient)

module.exports = clientRoute;