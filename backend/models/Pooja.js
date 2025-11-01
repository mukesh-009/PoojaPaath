const mongoose = require('mongoose');

const poojaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: [true, 'Please provide pooja title'],
    trim: true,
  },
  short: {
    type: String,
    required: [true, 'Please provide short description'],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'Please provide price'],
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

poojaSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Pooja', poojaSchema);
