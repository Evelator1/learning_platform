const express = require('express');
const {createQuestion,getQuestions,updateQuestionsVotes}=require("../controllers/interviewQuestion")
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");

const questionRouter=express.Router()


questionRouter.get("/",verifyToken, authorize("user"),getQuestions)
questionRouter.post("/newQuestion",verifyToken, authorize("user"),createQuestion)
questionRouter.patch("/:id/vote",verifyToken, authorize("user"), updateQuestionsVotes);

module.exports=questionRouter