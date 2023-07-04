const Subscription = require("../models/subscriptionsModel");

// GET - Get All - Read
const getAllSubscriptions = () => {
  return Subscription.find({});
};

// GET - Get By ID - Read
const getSubscriptionById = (id) => {
  return Subscription.findById({ _id: id });
};

// Post - Create a new Subscription - Create
const addSubscription = async (obj) => {
  const us = new Subscription(obj);
  await us.save();
  return "Created!";
};

// PUT - Update a Subscription - Update
const updateSubscription = async (id, obj) => {
  await Subscription.findByIdAndUpdate(id, obj);
  return "Updated!";
};

// DELETE - Delete a Subscription - Delete
const deleteSubscription = async (id) => {
  await Subscription.findByIdAndDelete(id);
  return "Deleted!";
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
};
