const express = require("express");
const usersBLL = require("../BLL/usersBLL");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Get All users
router.route("/").get(async (req, res) => {
  try {
    const users = await usersBLL.getAllUsers();
    res.json(users); // 200 - OK
  } catch (error) {
    res.json("There was an error!");
  }
});

// Get user by ID
router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const user = await usersBLL.getUserById(id);
  res.json(user);
});

// Add a new user
router.route("/").post(async (req, res) => {
  const obj = req.body;
  console.log(obj);
  const result = await usersBLL.addUser(obj);
  res.status(201).json(result);
});

// login user
router.route("/login").post(async (req, res) => {
  try {
    const obj = req.body;
    console.log(obj);
    const result = await usersBLL.addUser(obj);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json("There was an error!");
  }
});

// Update a user
router.route("/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await usersBLL.updateUser(id, obj);
    res.json(result);
  } catch (error) {
    res.status(500).json("There was an error!");
  }
});

// Delete a user
router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  const result = await usersBLL.deleteUser(id);
  res.json(result);
});

module.exports = router;
