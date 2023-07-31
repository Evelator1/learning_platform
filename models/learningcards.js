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
    enum: ["Technical question", "Non-technical question"],
    required: true,
  },
  group: {
    type: String,
    enum: ["Easy", "Moderate", "Hard"],
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Learningcard = mongoose.model("Learningcard", learningcardSchema);

module.exports = Learningcard;
