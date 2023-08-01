const express = require('express');
const {createAnswer, getAnswers,getAnswersByQuestionId,updateAnswersVotes}=require("../controllers/interviewAnswer")
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");

const answerRouter=express.Router()


answerRouter.get("/",verifyToken, authorize("user"),getAnswers)
answerRouter.get("/question/:id",verifyToken, authorize("user"),getAnswersByQuestionId)
answerRouter.post("/newAnswer",verifyToken, authorize("user"),createAnswer)
answerRouter.patch("/:id/vote",verifyToken, authorize("user"), updateAnswersVotes);

module.exports=answerRouter