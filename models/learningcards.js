const mongoose = require("mongoose");

const learningcardSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    max: 500,
  },
  answer: {
    type: String,
    required: true,
    max: 500,
  },
  category: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
});

const Learningcard = mongoose.model("Learningcard", learningcardSchema);

module.exports = Learningcard;
