const express = require("express");
const {
  createLearningcard,
  getLearningcard,
  deleteLearningCard,
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
learningcardRouter.delete("/:id", verifyToken, authorize("user"), deleteLearningCard);

module.exports = learningcardRouter;
