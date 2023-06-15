const userFile = require('../DAL/userFile');

const getAlluser = async () => {
  const {user} = await userFile.getuser();
  return user;
};

const getuser = async (id) => {
  const user = await getAlluser();
  return user.find((user) => user.id === +id);
};

const adduser = async (obj) => {
  const user = await getAlluser();
  user.push(obj);
  const data = { user };
  return userFile.setuser(data);
};

const updateuser = async (id, obj) => {
  const user = await getAlluser();
  const index = user.findIndex((user) => user.id === +id);
  if (index !== -1) {
    user[index] = obj;
    const data = { user };
    return userFile.setuser(data);
  }
};

const deleteuser = async (id, obj) => {
  const user = await getAlluser();
  const index = user.findIndex((user) => user.id === +id);
  if (index !== -1) {
    user.splice(index, 1);
    const data = { user };
    return userFile.setuser(data);
  }
};

module.exports = { getAlluser, getuser, adduser, updateuser, deleteuser };
