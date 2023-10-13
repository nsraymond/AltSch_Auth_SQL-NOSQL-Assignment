const { Client } = require('../models');

// get all clients
async function getAllClients(req, res) {
  try {
    const clients = await Client.findAll();
    res.status(200).send(clients);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// getOneClient
async function getOneClient(req, res) {
  const id = req.params.id;
  try {
    const singleClient = await Client.findByPk(id);
    res.status(200).send(singleClient);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// createClient
async function createClient(req, res) {
  const newClient = req.body;
  try {
    const createdClient = await Client.create(newClient);
    res.status(201).send({
      message: 'Client created successfully',
      data: createdClient
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// update client
async function updateClient(req, res) {
  const id = req.params.id;
  const client = req.body;
  try {
    const [rowsUpdated, [updatedClient]] = await Client.update(client, {
      where: { id },
      returning: true,
    });
    if (rowsUpdated > 0) {
      res.status(200).send({
        message: 'Client updated successfully',
        data: updatedClient
      });
    } else {
      res.status(404).send('Client not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// delete client
async function deleteClient(req, res) {
  const id = req.params.id;
  try {
    const deletedRows = await Client.destroy({
      where: { id },
    });
    if (deletedRows > 0) {
      res.status(200).send({
        message: 'Client deleted successfully'
      });
    } else {
      res.status(404).send('Client not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllClients,
  getOneClient,
  createClient,
  updateClient,
  deleteClient
};
