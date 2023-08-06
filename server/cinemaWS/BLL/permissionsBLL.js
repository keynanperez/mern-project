const permissionFile = require("../DAL/permissionsFile");

const getAllPermission = async () => {
  const { permission } = await permissionFile.getPermissions();

  return permission;
};
//GET BY ID
const getPermission = async (id) => {
  console.log(id);

  const permission = await getAllPermission();
  console.log(permission);
  
  return permission.find((permission) => permission.id === +id);
};



//POST
const addPermission = async (obj) => {
  const per = await getAllPermission();
  per.push(obj);
  const data = await{ per };
  console.log(data);
  return await permissionFile.setPermissions(data);
};

const updatePermission = async (id, obj) => {
  const permission = await getAllPermission();
  const index = permission.findIndex((permission) => permission.id === +id);
  if (index !== -1) {
    permission[index] = obj;
    const data = { permission };
    return permissionFile.setpermission(data);
  }
};

const deletePermission = async (id, obj) => {
  const permission = await getAllPermission();
  const index = permission.findIndex((permission) => permission.id === +id);
  if (index !== -1) {
    permission.splice(index, 1);
    const data = { permission };
    return permissionFile.setpermission(data);
  }
};

module.exports = {
  getAllPermission,
  getPermission,
  addPermission,
  updatePermission,
  deletePermission,
};
