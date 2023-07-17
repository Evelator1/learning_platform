const Comment =require("../models/Comments")


const GetComments=async(req,res)=>{
    try{
        const comments = await Comment.find().populate("author").populate("onPost")
        res.status(201).json(comments)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const GetCommentById=async(req,res)=>{
    try{
        const ID=req.params.id
        const comment = await Comment.findById(ID)
        res.status(201).json(comment)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const CreatComment=async(req,res)=>{
    try{
        const {
            body:{content, author,onPost}
        }=req
        const comment = await Comment.create({content, author,onPost})
        res.status(201).json(comment)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const UpdateComment=async(req,res)=>{
    try{
        const id =req.params.id
        const body=req.body
        const comment = await Comment.findByIdAndUpdate(id,body,{new:true})
        res.status(201).json(comment)
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports={CreatComment, GetComments, GetCommentById, UpdateComment}