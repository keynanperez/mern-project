const jf = require("jsonfile");
const file = "./data/permissions.json";

// read from a JSON file
const getpermissions = () => {
  return jf.readFile(file);
};

// write to a JSON file
const setpermissions = async (obj) => {
  await jf.writeFile(file, obj);
  return "Done!";
};

module.exports = {
  getpermissions,
  setpermissions,
};
