const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const serviceSchema = new Schema(
  {
    title: String,
    description: String,
    serviceType:{
      type: String,
      enum: [String],
      default: String,
    },
    client: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
    worker: [{ type: Schema.Types.ObjectId, ref: 'Worker' }],
    reviews: [
      {
        user: String,
        comments: String
      }
    ],
    rating: Number,
    price: Number
  },
  {
    timestamps: true

  }

);

const Service = model("Service", serviceSchema);

module.exports = Service;