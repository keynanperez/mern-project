const jf = require('jsonfile');
const file = './data/permissions.json';

// read from a JSON file
const getpermissions = async() => {
  //console.log("dcd")
  //console.log(await jf.readFile(file))
  return await jf.readFile(file);
};



const setpermissions = async (obj) => {
  console.log(obj)

  await jf.writeFile(file, obj);
  return "Done!";
};

module.exports = {
  getpermissions,
  setpermissions,
};
