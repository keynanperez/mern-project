const express = require("express");
const subscriptionsBLL = require("../BLL/subscriptionsBLL");

const router = express.Router();

// Get All subscriptions
router.route("/").get(async (req, res) => {
  try {
    const subscriptions = await subscriptionsBLL.getAllSubscriptions();
    res.json(subscriptions); // 200 - OK
  } catch (error) {
    res.json("There was an error!");
  }
});

// Get subscription by ID
router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const subscription = await subscriptionsBLL.getSubscriptionById(id);
  res.json(subscription);
});

// Add a new subscription
router.route("/").post(async (req, res) => {
  const obj = req.body;
  const result = await subscriptionsBLL.addSubscription(obj);
  res.status(201).json(result);
});

// Update a subscription
router.route("/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await subscriptionsBLL.updateSubscription(id, obj);
    res.json(result);
  } catch (error) {
    res.status(500).json("There was an error!");
  }
});

// Delete a subscription
router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  const result = await subscriptionsBLL.deleteSubscription(id);
  res.json(result);
});

module.exports = router;
