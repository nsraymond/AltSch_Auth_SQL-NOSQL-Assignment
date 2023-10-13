const { categories } = require('../models');

// get all categories
async function getAllCategories(req, res) {
  try {
    const allCategory = await categories.findAll();
    res.status(200).send(allCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// getOneCategory
async function getOneCategory(req, res) {
  const id = req.params.id;
  try {
    const singleCategory = await categories.findByPk(id);
    res.status(200).send(singleCategory);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// createCategory
async function createCategory(req, res) {
  const newCategory = req.body;
  try {
    const createdCategory = await categories.create(newCategory);
    res.status(201).send({
      message: 'Category created successfully',
      data: createdCategory
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// update category
async function updateCategory(req, res) {
  const id = req.params.id;
  const category = req.body;
  try {
    const [rowsUpdated, [updatedCategory]] = await categories.update(category, {
      where: { id },
      returning: true,
    });
    if (rowsUpdated > 0) {
      res.status(200).send({
        message: 'Category updated successfully',
        data: updatedCategory
      });
    } else {
      res.status(404).send('Category not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// delete category
async function deleteCategory(req, res) {
  const id = req.params.id;
  try {
    const deletedRows = await categories.destroy({
      where: { id },
    });
    if (deletedRows > 0) {
      res.status(200).send({
        message: 'Category deleted successfully'
      });
    } else {
      res.status(404).send('Category not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
