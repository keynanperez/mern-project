const jf = require('jsonfile');
const file = './data/permissions.json';

// read from a JSON file
const getPermissions = () => {
  return jf.readFile(file);
};



const setPermissions = async (obj) => {
  console.log(obj)

  await jf.writeFile(file, obj);
  return "Done!";
};

module.exports = {
  getPermissions,
  setPermissions,
};
