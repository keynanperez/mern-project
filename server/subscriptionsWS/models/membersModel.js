const mongoose = require("mongoose");

// 'Schema' maps to a MongoDB collection and defines the shape of the documents within that collection
// 'Schema' is the blueprint of the documents
const memberSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    city: String,
    // car: {
    //   model: String,
    //   color: String,
    //   year: Number
    // },
    // cars: [{ model: String, color: String, year: Number }]
  },
  { versionKey: false }
);

// A 'model' is a class with which we construct documents in a collection
const Member = mongoose.model("member", memberSchema, "members");
// The first argument is the singular name of the collection that will be created for the model (Mongoose will create the database collection for the above model 'member').
// The second argument is the schema to use in creating the model.
// The third argument is the name of the collection.

module.exports = Member;
