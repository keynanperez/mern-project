const Member = require('../models/membersModel');

// GET - Get All - Read
const getAllMembers = () => {
  return Member.find({});
};

// GET - Get By ID - Read
const getMemberById = (id) => {
  return Member.findById({ _id: id });
};

// Post - Create a new Member - Create
const addMember = async (obj) => {
  const us = new Member(obj);
  await us.save();
  return 'Created!';
};

// PUT - Update a Member - Update
const updateMember = async (id, obj) => {
  await Member.findByIdAndUpdate(id, obj);
  return 'Updated!';
};

// DELETE - Delete a Member - Delete
const deleteMember = async (id) => {
  await Member.findByIdAndDelete(id);
  return 'Deleted!';
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};
