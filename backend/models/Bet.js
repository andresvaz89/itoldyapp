
const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  createdBy:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  againstUser:    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt:      { type: Date, default: Date.now },
  dueDate:        { type: Date, required: true },
  title:          { type: String, required: true },
  description:    { type: String, required: true }
});

module.exports = mongoose.model('Bet', betSchema);
