const InterviewAnswer = require("../models/interviewAnswer");

const createAnswer=async (req,res)=>{
    try{
        const {body:{author,question,answerContent}}=req
        const answer=await InterviewAnswer.create({author,question,answerContent})
        res.status(201).json(answer)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const getAnswers=async (req,res)=>{
    try{
        const answers=await InterviewAnswer.find()
        res.status(200).json(answers)
    }catch(error){
        res.status(500).send(error.message)
    }
}
const getAnswersByQuestionId=async (req,res)=>{
    try{
        const id =req.params.id
        const answers=await InterviewAnswer.find({question:id}).populate("author")
        res.status(200).json(answers)
    }catch(error){
        res.status(500).send(error.message)
    }
}


module.exports={createAnswer,getAnswers,getAnswersByQuestionId}