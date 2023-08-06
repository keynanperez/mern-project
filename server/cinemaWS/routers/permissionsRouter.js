const express = require("express");
const permissionBLL = require("../BLL/permissionsBLL");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const permission = await permissionBLL.getAllPermission();
    res.json(permission); // 200 - OK
  } catch (error) {
    res.json("There was an error!");
  }
});

router.route("/:id").get(async (req, res) => {
  try {
  const { id } = req.params;
  console.log(id);

  const permission = await permissionBLL.getPermission(id);
  console.log(permission);

  res.json(permission);
} catch (error) {
  res.json("There was an error!");

}
});


//POST
router.route("/").post(async (req, res) => {
  try {
  const obj = req.body;
  const result = await permissionBLL.addPermission(obj);
  res.status(201).json(result);
} catch (error) {
  res.json("There was an error!");

}
});


router.route("/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await permissionBLL.updatePermission(id, obj);
    res.json(result);
  } catch (error) {
    res.status(500).json("There was an error!");
  }
});

router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  const result = await permissionBLL.deletePermission(id);
  res.json(result);
});

module.exports = router;
