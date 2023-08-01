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

const updateAnswersVotes = async (req, res) => {
    try {
      const answerId = req.params.id;
      const { voteType } = req.body;
      const {id}=req.user
      
  
      const answer = await InterviewAnswer.findById(answerId);
      if (!answer) {
        return res.status(404).json({ message: "answer not found" });
      }

      const hasUpvoted = answer.upVotes.includes(id);
      const hasDownvoted = answer.downVotes.includes(id);
  
      if (voteType === "upvote") {
        if (hasDownvoted) {
          answer.downVotes.pull(id);
        } else {
          if (hasUpvoted) {
            return res.status(400).json({ message: "You can vote only once" });
          }
          answer.upVotes.push(id);
        }

      } else if (voteType === "downvote") {
        if (hasUpvoted) {
          answer.upVotes.pull(id);
        } else {
          if (hasDownvoted) {
            return res.status(400).json({ message: "You can vote only once" });
          }
          answer.downVotes.push(id);
        }
      }

      answer.votes=answer.upVotes.length-answer.downVotes.length
  
      await answer.save();
      res.status(200).json(answer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports={createAnswer,getAnswers,getAnswersByQuestionId,updateAnswersVotes}