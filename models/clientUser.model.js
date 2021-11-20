const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userClientSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String
});

const UserClient = model("UserClient", userClientSchema);

module.exports = UserClient;