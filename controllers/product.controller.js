const productModel = require('../models/products.model')

// get all products
function getAllProducts(req, res) {
    productModel.find()
    .then((products) => {
        res.status(200).send(products)
    }).catch((error) => {
        console.log(err)
        res.status(500).send(error.message)
    })
}

// getOneProduct
function getOneProduct(req, res) {
    const id = req.params.id;
    productModel.findById(id)
    .then((singleProduct) => {
        res.status(200).send(singleProduct)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// createProduct
function createProduct(req, res) {
    const newProduct = req.body
    productModel.create(newProduct)
    .then((newProduct) => {
        res.status(201).send({
            message: 'Product created successfully',
            data: newProduct
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// update book
function updateProduct(req, res) {
    const id = req.params.id;
    const product = req.body;
    productModel.findByIdAndUpdate(id, product, { new:true })
    .then((updatedProduct) => {
        res.status(200).send({
            message: 'Product updated successfully',
            data: updatedProduct
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// delete product
function deleteProduct(req, res) {
    const id = req.params.id;
    productModel.findByIdAndRemove(id)
    .then((deletedProduct) => {
        res.status(200).send({
            message: 'Product deleted successfully'
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}