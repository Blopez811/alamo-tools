const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  tools: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
