const orderModel = require('../models/order.model')

// get all orders
function getAllOrders(req, res) {
    orderModel.find()
    .then((orders) => {
        res.status(200).send(orders)
    }).catch((error) => {
        console.log(err)
        res.status(500).send(error.message)
    })
}

// getOneOrder
function getOneOrder(req, res) {
    const id = req.params.id;
    orderModel.findById(id)
    .then((singleOrder) => {
        res.status(200).send(singleOrder)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// createOrder
function createOrder(req, res) {
    const newOrder = req.body
    orderModel.create(newOrder)
    .then((newOrder) => {
        res.status(201).send({
            message: 'Order created successfully',
            data: newOrder
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// update order
function updateOrder(req, res) {
    const id = req.params.id;
    const order = req.body;
    orderModel.findByIdAndUpdate(id, order, { new:true })
    .then((updatedOrder) => {
        res.status(200).send({
            message: 'Order updated successfully',
            data: updatedOrder
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// delete order
function deleteOrder(req, res) {
    const id = req.params.id;
    orderModel.findByIdAndRemove(id)
    .then((deletedOrder) => {
        res.status(200).send({
            message: 'Order deleted successfully'
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

module.exports = {
    getAllOrders,
    getOneOrder,
    createOrder,
    updateOrder,
    deleteOrder
}