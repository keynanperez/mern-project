const User = require('../models/usersModel');

// GET - Get All - Read
const getAllUsers = () => {
  return User.find({});
};

// GET - Get By ID - Read
const getUserById = (id) => {
  return User.findById({ _id: id });
};



// Post - Create a new User - Create
const addUser = async (obj) => {
  const us = new User(obj);
  await us.save();
  return 'Created!';
};

// PUT - Update a User - Update
const updateUser = async (id, obj) => {
  await User.findByIdAndUpdate(id, obj);
  return 'Updated!';
};

// DELETE - Delete a User - Delete
const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return 'Deleted!';
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
