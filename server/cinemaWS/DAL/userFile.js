const jf = require('jsonfile');
const file = './data/users.json';

// read from a JSON file
const getUser = () => {
  return jf.readFile(file);
};

// write to a JSON file
const setUser = async (obj) => {
  await jf.writeFile(file, obj);
  return 'Done!';
};

module.exports = {
    getUser,
    setUser,
};
