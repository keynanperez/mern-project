const express = require("express");
const userBLL = require("../BLL/userBLL");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const user = await userBLL.getAlluser();
    res.json(user); // 200 - OK
  } catch (error) {
    res.json("There was an error!");
  }
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const user = await userBLL.getuser(id);
  res.json(user);
});

router.route("/").post(async (req, res) => {
  const obj = req.body;
  const result = await userBLL.adduser(obj);
  res.status(201).json(result);
});

router.route("/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await userBLL.updateuser(id, obj);
    res.json(result);
  } catch (error) {
    res.status(500).json("There was an error!");
  }
});

router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  const result = await userBLL.deleteuser(id);
  res.json(result);
});

module.exports = router;
