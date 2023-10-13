const { products } = require('../models');

// get all products
async function getAllProducts(req, res) {
  try {
    const product = await products.findAll();
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// getOneProduct
async function getOneProduct(req, res) {
  const id = req.params.id;
  try {
    const singleProduct = await products.findByPk(id);
    res.status(200).send(singleProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// createProduct
async function createProduct(req, res) {
  const newProduct = req.body;
  try {
    const createdProduct = await products.create(newProduct);
    res.status(201).send({
      message: 'Product created successfully',
      data: createdProduct
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// update product
async function updateProduct(req, res) {
  const id = req.params.id;
  const product = req.body;
  try {
    const [rowsUpdated, [updatedProduct]] = await products.update(product, {
      where: { id },
      returning: true,
    });
    if (rowsUpdated > 0) {
      res.status(200).send({
        message: 'Product updated successfully',
        data: updatedProduct
      });
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// delete product
async function deleteProduct(req, res) {
  const id = req.params.id;
  try {
    const deletedRows = await products.destroy({
      where: { id },
    });
    if (deletedRows > 0) {
      res.status(200).send({
        message: 'Product deleted successfully'
      });
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
