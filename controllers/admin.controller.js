const { Admin } = require('../models');

// get all admin
async function getAllAdmins(req, res) {
  try {
    const admin = await Admin.findAll();
    res.status(200).send(admin);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// getOneadmin
async function getOneAdmin(req, res) {
  const id = req.params.id;
  try {
    const singleAdmin = await Admin.findByPk(id);
    res.status(200).send(singleAdmin);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// createAdmin
async function createAdmin(req, res) {
  const newAdmin = req.body;
  try {
    const createdAdmin = await Admin.create(newAdmin);
    res.status(201).send({
      message: 'Admin created successfully',
      data: createdAdmin
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// update admin
async function updateAdmin(req, res) {
  const id = req.params.id;
  const admin = req.body;
  try {
    const [rowsUpdated, [updatedAdmin]] = await Admin.update(admin, {
      where: { id },
      returning: true,
    });
    if (rowsUpdated > 0) {
      res.status(200).send({
        message: 'Admin updated successfully',
        data: updatedAdmin
      });
    } else {
      res.status(404).send('Admin not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// delete admin
async function deleteAdmin(req, res) {
  const id = req.params.id;
  try {
    const deletedRows = await Admin.destroy({
      where: { id },
    });
    if (deletedRows > 0) {
      res.status(200).send({
        message: 'Admin deleted successfully'
      });
    } else {
      res.status(404).send('Admin not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllAdmins,
  getOneAdmin,
  createAdmin,
  updateAdmin,
  deleteAdmin
};
