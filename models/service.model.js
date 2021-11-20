const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const serviceSchema = new Schema(
  {
    title: String,
    description: String,
    client: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
    reviews: [
      {
        user: String,
        comments: String
      }
    ],
    rating: Number,
    img_url: String,
  },
  {
    timestamps: true

  }

);

const Service = model("Service", serviceSchema);

module.exports = Service;