const clientModel = require('../models/clients.model')

// get all clients
function getAllClients(req, res) {
    clientModel.find()
    .then((clients) => {
        res.status(200).send(clients)
    }).catch((error) => {
        console.log(err)
        res.status(500).send(error.message)
    })
}

// getOneClient
function getOneClient(req, res) {
    const id = req.params.id;
    clientModel.findById(id)
    .then((singleClient) => {
        res.status(200).send(singleClient)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// createClient
function createClient(req, res) {
    const newClient = req.body
    clientModel.create(newClient)
    .then((newClient) => {
        res.status(201).send({
            message: 'Client created successfully',
            data: newClient
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// update client
function updateClient(req, res) {
    const id = req.params.id;
    const client = req.body;
    clientModel.findByIdAndUpdate(id, client, { new:true })
    .then((updatedClient) => {
        res.status(200).send({
            message: 'Client updated successfully',
            data: updatedClient
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// delete client
function deleteClient(req, res) {
    const id = req.params.id;
    clientModel.findByIdAndRemove(id)
    .then((deletedClient) => {
        res.status(200).send({
            message: 'Client deleted successfully'
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

module.exports = {
    getAllClients,
    getOneClient,
    createClient,
    updateClient,
    deleteClient
}