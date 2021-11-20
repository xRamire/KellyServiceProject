const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userClientSchema = new Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  address: String,
  postcode: Number,
  image: String,
});

const UserClient = model("UserClient", userClientSchema);

module.exports = UserClient;