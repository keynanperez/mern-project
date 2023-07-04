const jf = require("jsonfile");
const file = "./data/user.json";

// read from a JSON file
const getuser = () => {
  return jf.readFile(file);
};

// write to a JSON file
const setuser = async (obj) => {
  await jf.writeFile(file, obj);
  return "Done!";
};

module.exports = {
  getuser,
  setuser,
};
