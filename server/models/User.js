const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 64
  },
  orders: [Order.schema]
});

// store password prior to encryption
userSchema.pre('save', async function(encryptPwd) {
  if (this.isNew || this.isModified('password')) {
    // iterations for password encryption layer, 10 is nominal
    const costFactor = 10;
    this.password = await bcrypt.hash(this.password, costFactor);
  }
  encryptPwd();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;