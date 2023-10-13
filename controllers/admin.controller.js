const adminModel = require('../models/admins.model')

// get all admins
function getAllAdmins(req, res) {
    adminModel.find()
    .then((admins) => {
        res.status(200).send(admins)
    }).catch((error) => {
        console.log(err)
        res.status(500).send(error.message)
    })
}

// getOneAdmin
function getOneAdmin(req, res) {
    const id = req.params.id;
    adminModel.findById(id)
    .then((singleAdmin) => {
        res.status(200).send(singleAdmin)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// createAdmin
function createAdmin(req, res) {
    const newAdmin = req.body
    adminModel.create(newAdmin)
    .then((newAdmin) => {
        res.status(201).send({
            message: 'Admin created successfully',
            data: newAdmin
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// update Admin
function updateAdmin(req, res) {
    const id = req.params.id;
    const admin = req.body;
    adminModel.findByIdAndUpdate(id, admin, { new:true })
    .then((updatedAdmin) => {
        res.status(200).send({
            message: 'Admin updated successfully',
            data: updatedAdmin
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// delete Admin
function deleteAdmin(req, res) {
    const id = req.params.id;
    adminModel.findByIdAndRemove(id)
    .then((deletedAdmin) => {
        res.status(200).send({
            message: 'Admin deleted successfully'
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

module.exports = {
    getAllAdmins,
    getOneAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin
}