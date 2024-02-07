const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique:true,
  },
  role: {
    type: String,
    default:'subscriber',
  }
}, {
  timestamps: true,
})

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;