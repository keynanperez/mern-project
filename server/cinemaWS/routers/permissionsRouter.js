const express = require("express");
const permissionBLL = require("../BLL/permissionsBLL");

const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const permission = await permissionBLL.getAllpermission();
    res.json(permission); // 200 - OK
  } catch (error) {
    res.json("There was an error!");
  }
});

router.route("/:id").get(async (req, res) => {
  try {
  const { id } = req.params;
  const permission = await permissionBLL.getpermission(id);
  res.json(permission);
} catch (error) {
  res.json("There was an error!");

}
});

router.route("/").post(async (req, res) => {
  const obj = req.body;
  const result = await permissionBLL.addpermission(obj);
  res.status(201).json(result);
});

router.route("/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await permissionBLL.updatepermission(id, obj);
    res.json(result);
  } catch (error) {
    res.status(500).json("There was an error!");
  }
});

router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  const result = await permissionBLL.deletepermission(id);
  res.json(result);
});

module.exports = router;
