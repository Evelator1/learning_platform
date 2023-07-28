const express = require('express');

const {createAnswer, getAnswers}=require("../controllers/interviewAnswer")


const answerRouter=express.Router()


answerRouter.get("/",getAnswers)
answerRouter.post("/newAnswer",createAnswer)

module.exports=answerRouter