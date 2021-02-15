const mongoose = require('mongoose');

const questionModel = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  user: String,
  question: String,
  channel: String,
});

module.exports = mongoose.model('Question', questionModel);
