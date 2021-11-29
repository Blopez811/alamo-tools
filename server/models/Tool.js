const mongoose = require('mongoose');
const { Schema } = mongoose;

const toolSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0.95,
    default: 49.95,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;