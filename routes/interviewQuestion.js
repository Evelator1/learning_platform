const express = require('express');
const {createQuestion,getQuestions,getQuestionsById,updateQuestionsVotes,updateQuestionById}=require("../controllers/interviewQuestion")
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");

const questionRouter=express.Router()


questionRouter.get("/",verifyToken, authorize("user"),getQuestions)
questionRouter.get("/:id",verifyToken,authorize("user"),getQuestionsById)
questionRouter.post("/newQuestion",verifyToken, authorize("user"),createQuestion)
questionRouter.patch("/:id/vote",verifyToken, authorize("user"), updateQuestionsVotes);
questionRouter.put("/:id", verifyToken,authorize("user"),updateQuestionById)


module.exports=questionRouter