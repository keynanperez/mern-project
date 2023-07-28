const permissionFile = require("../DAL/permissionsFile");

const getAllpermission = async () => {
  const { permission } = await permissionFile.getpermissions();
  return permission;
};

const getpermission = async (id) => {
  const permission = await getAllpermission();
  return permission.find((permission) => permission.id === +id);
};

const addpermission = async (obj) => {
  const permission = await getAllpermission();
  permission.push(obj);
  const data = { permission };
  return permissionFile.setpermission(data);
};

const updatepermission = async (id, obj) => {
  const permission = await getAllpermission();
  const index = permission.findIndex((permission) => permission.id === +id);
  if (index !== -1) {
    permission[index] = obj;
    const data = { permission };
    return permissionFile.setpermission(data);
  }
};

const deletepermission = async (id, obj) => {
  const permission = await getAllpermission();
  const index = permission.findIndex((permission) => permission.id === +id);
  if (index !== -1) {
    permission.splice(index, 1);
    const data = { permission };
    return permissionFile.setpermission(data);
  }
};

module.exports = { getAllpermission, getpermission, addpermission, updatepermission, deletepermission };
