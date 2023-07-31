const InterviewQuestion = require("../models/interviewQuestion");

const createQuestion=async (req,res)=>{
    try{
        const {id}=req.user
        const {body:{content,author,isTechnical}}=req
        const question=await InterviewQuestion.create({content,author,isTechnical})
        res.status(201).json(question)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const getQuestions=async (req,res)=>{
    try{
        const questions=await InterviewQuestion.find().sort({votes:-1}).populate("author")
        .populate({
          path: "upVotes",
          model: "User",
          select: "username",
        })
        .populate({
          path: "downVotes",
          model: "User",
          select: "username",
        })
        .exec();
        res.status(200).json(questions)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const updateQuestionsVotes = async (req, res) => {
    try {
      const questionId = req.params.id;
      const { voteType } = req.body;
      const {id}=req.user
      
  
      const question = await InterviewQuestion.findById(questionId);
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }

      const hasUpvoted = question.upVotes.includes(id);
      const hasDownvoted = question.downVotes.includes(id);
  
      if (voteType === "upvote") {
        if (hasDownvoted) {
          question.downVotes.pull(id);
        } else {
          if (hasUpvoted) {
            return res.status(400).json({ message: "You can vote only once" });
          }
          question.upVotes.push(id);
        }

      } else if (voteType === "downvote") {
        if (hasUpvoted) {
          question.upVotes.pull(id);
        } else {
          if (hasDownvoted) {
            return res.status(400).json({ message: "You can vote only once" });
          }
          question.downVotes.push(id);
        }
      }

      question.votes=question.upVotes.length-question.downVotes.length
  
      await question.save();
      res.status(200).json(question);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports={createQuestion,getQuestions,updateQuestionsVotes}