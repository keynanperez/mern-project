const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/userDB")
    .then(() => console.log("Connected to userDB!"))
    .catch((error) => console.log(error));
};

module.exports = connectDB;
