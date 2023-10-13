const userModel = require('../models/users.model')

// get all users
function getAllUsers(req, res) {
    userModel.find()
    .then((users) => {
        res.status(200).send(users)
    }).catch((error) => {
        console.log(err)
        res.status(500).send(error.message)
    })
}

// getOneUser
function getOneUser(req, res) {
    const id = req.params.id;
    userModel.findById(id)
    .then((singleUser) => {
        res.status(200).send(singleUser)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// createUser
function createUser(req, res) {
    const newUser = req.body
    userModel.create(newUser)
    .then((newUser) => {
        res.status(201).send({
            message: 'User created successfully',
            data: newUser
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// update user
function updateUser(req, res) {
    const id = req.params.id;
    const user = req.body;
    userModel.findByIdAndUpdate(id, user, { new:true })
    .then((updatedUser) => {
        res.status(200).send({
            message: 'User updated successfully',
            data: updatedUser
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// delete user
function deleteUser(req, res) {
    const id = req.params.id;
    userModel.findByIdAndRemove(id)
    .then((deletedUser) => {
        res.status(200).send({
            message: 'User deleted successfully'
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}