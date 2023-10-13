const categoryModel = require('../models/categories.model')

// get all categories
function getAllCategories(req, res) {
    categoryModel.find()
    .then((categories) => {
        res.status(200).send(categories)
    }).catch((error) => {
        console.log(err)
        res.status(500).send(error.message)
    })
}

// getOneCategory
function getOneCategory(req, res) {
    const id = req.params.id;
    categoryModel.findById(id)
    .then((singleCategory) => {
        res.status(200).send(singleCategory)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// createCategory
function createCategory(req, res) {
    const newCategory = req.body
    categoryModel.create(newCategory)
    .then((newCategory) => {
        res.status(201).send({
            message: 'Category created successfully',
            data: newCategory
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// update Category
function updateCategory(req, res) {
    const id = req.params.id;
    const category = req.body;
    categoryModel.findByIdAndUpdate(id, category, { new:true })
    .then((updatedCategory) => {
        res.status(200).send({
            message: 'Category updated successfully',
            data: updatedCategory
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

// delete category
function deleteCategory(req, res) {
    const id = req.params.id;
    categoryModel.findByIdAndRemove(id)
    .then((deletedCategory) => {
        res.status(200).send({
            message: 'Category deleted successfully'
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err.message)
    })
}

module.exports = {
    getAllCategories,
    getOneCategory,
    createCategory,
    updateCategory,
    deleteCategory
}