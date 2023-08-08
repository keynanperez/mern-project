const permissionFile = require("../DAL/permissionsFile");


const getAllpermissions = async () => {
  const  permission  = await permissionFile.getpermissions();
  //console.log(permission)

  return permission;
};

const getpermission = async (id) => {
  const {permissions} = await getAllpermissions();
 //const permi = permissions.find((per) => per.id === id);
// console.log(permi)

  return  permissions.find((per) => per.id === id);

};
//POST
const addpermission = async (obj) => {
  const {permissions} = await getAllpermissions();
  permissions.push(obj);
  const data = { permissions };
  return permissionFile.setpermissions(data);
};

const updatepermission = async (id, obj) => {
  const {permissions} = await getAllpermissions();
  const index = permissions.findIndex((permission) => permission.id === id);
  if (index !== -1) {
    permissions[index] = obj;
    const data = { permissions };
    return permissionFile.setpermissions(data);
  }
};
const deletepermission = async (id, obj) => {
  const {permissions} = await getAllpermissions();
  //console.log(permissions)

  const index =  permissions.findIndex((per) => per.id === id);
  console.log(index)

  if (index !== -1) {
    permissions.splice(index, 1);
    const data = { permissions };
    //console.log(data)

    return permissionFile.setpermissions(data);
  }
};



module.exports = { getAllpermissions, getpermission, addpermission, updatepermission, deletepermission };
