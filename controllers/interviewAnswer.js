const InterviewAnswer = require("../models/interviewAnswer");

const createAnswer=async (req,res)=>{
    try{
        const {body:{body,author,question,likes,dislikes}}=req
        const answer=await InterviewAnswer.create({body,author,question,likes,dislikes})
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


module.exports={createAnswer,getAnswers}