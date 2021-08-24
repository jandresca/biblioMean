const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
    name: String,
    direction: String,  
    date: { type: Date, default: Date.now },
});

const library = mongoose.model("library", librarySchema);
module.exports = library;