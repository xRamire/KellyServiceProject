const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userWorkerSchema = new Schema({
  fullName: String,
  email: { type: String, unique: true },
  password: String,
  address: String,
  postcode: Number,
  serviceType:{
    type: String,
    enum: [String],
    default: String,
  },
  price: Number,
  image: String
});

const UserWorker = model("UserWorker", userWorkerSchema);

module.exports = UserWorker;
