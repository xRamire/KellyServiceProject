const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userWorkerSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String
});

const UserWorker = model("UserWorker", userWorkerSchema);

module.exports = UserWorker;
