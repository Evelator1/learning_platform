const express = require("express");
const {
  createLearningcard,
  getLearningcard,
} = require("../controllers/learningcards");
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");

const learningcardRouter = express.Router();

learningcardRouter.post(
  "/createlearningcard",
  verifyToken,
  authorize("user"),
  createLearningcard
);
learningcardRouter.get("/", verifyToken, authorize("user"), getLearningcard);

module.exports = learningcardRouter;
