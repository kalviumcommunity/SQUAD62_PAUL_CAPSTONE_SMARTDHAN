const mongoose = require('mongoose');

const CapsuleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Capsule', CapsuleSchema);
