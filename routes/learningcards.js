const express = require("express");
const {
  createLearningcard,
  getLearningcard,
} = require("../controllers/learningcards");

const learningcardRouter = express.Router();

learningcardRouter.post("/createlearningcard", createLearningcard);
learningcardRouter.get("/", getLearningcard);

module.exports = learningcardRouter;
