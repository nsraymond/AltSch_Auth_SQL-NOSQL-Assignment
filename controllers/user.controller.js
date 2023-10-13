const { User } = require('../models');

// get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// getOneUser
async function getOneUser(req, res) {
  const id = req.params.id;
  try {
    const singleUser = await User.findByPk(id);
    res.status(200).send(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// createUser
async function createUser(req, res) {
  const newUser = req.body;
  try {
    const createdUser = await User.create(newUser);
    res.status(201).send({
      message: 'User created successfully',
      data: createdUser
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// update user
async function updateUser(req, res) {
  const id = req.params.id;
  const user = req.body;
  try {
    const [rowsUpdated, [updatedUser]] = await User.update(user, {
      where: { id },
      returning: true,
    });
    if (rowsUpdated > 0) {
      res.status(200).send({
        message: 'User updated successfully',
        data: updatedUser
      });
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
}

// delete user
async function deleteUser(req, res) {
    const id = req.params.id;
    try {
      console.log(`Deleting user with ID: ${id}`);
      const deletedRows = await User.destroy({
        where: { id },
      });
      console.log(`Deleted ${deletedRows} rows.`);
      if (deletedRows > 0) {
        res.status(200).send({
          message: 'User deleted successfully',
        });
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
  }
  


module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
};
