const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  //_id:{ type: String, required: false },
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  note: { type: Number, required: true },
});

module.exports = mongoose.model('Film', filmSchema);

