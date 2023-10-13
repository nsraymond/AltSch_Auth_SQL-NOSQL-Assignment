const express = require('express')
const controller = require('../controllers/client.controller')
const authenticateToken = require('../middleware/authenticate.token')

const clientRoute = express.Router()

clientRoute.get('/', authenticateToken, controller.getAllClients)
clientRoute.get('/:id', authenticateToken, controller.getOneClient)
clientRoute.post('/', authenticateToken, controller.createClient)
clientRoute.patch('/:id', authenticateToken, controller.updateClient)
clientRoute.delete('/:id', authenticateToken, controller.deleteClient)

module.exports = clientRoute;