const { orders } = require('../models');

// get all orders
async function getAllOrders(req, res) {
  try {
    const order = await orders.findAll();
    res.status(200).send(order);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// getOneProduct
async function getOneOrder(req, res) {
  const id = req.params.id;
  try {
    const singleOrder = await orders.findByPk(id);
    res.status(200).send(singleOrder);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// createOrder
async function createOrder(req, res) {
  const newOrder = req.body;
  try {
    const createdOrder = await orders.create(newOrder);
    res.status(201).send({
      message: 'Order created successfully',
      data: createdOrder
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// update order
async function updateOrder(req, res) {
  const id = req.params.id;
  const order = req.body;
  try {
    const [rowsUpdated, [updatedOrder]] = await orders.update(order, {
      where: { id },
      returning: true,
    });
    if (rowsUpdated > 0) {
      res.status(200).send({
        message: 'Order updated successfully',
        data: updatedOrder
      });
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// delete product
async function deleteOrder(req, res) {
  const id = req.params.id;
  try {
    const deletedRows = await orders.destroy({
      where: { id },
    });
    if (deletedRows > 0) {
      res.status(200).send({
        message: 'Order deleted successfully'
      });
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllOrders,
  getOneOrder,
  createOrder,
  updateOrder,
  deleteOrder
};
