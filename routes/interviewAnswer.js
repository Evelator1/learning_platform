const express = require('express');

const {createAnswer, getAnswers,getAnswersByQuestionId}=require("../controllers/interviewAnswer")


const answerRouter=express.Router()


answerRouter.get("/",getAnswers)
answerRouter.get("/question/:id",getAnswersByQuestionId)
answerRouter.post("/newAnswer",createAnswer)

module.exports=answerRouter