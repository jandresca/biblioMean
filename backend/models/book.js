const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  autor: String,
  library: { type: mongoose.Schema.ObjectId, ref: "library" },
  imageUrl: String,
  date: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const book = mongoose.model("book", bookSchema);
module.exports = book;