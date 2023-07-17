const Post =require("../models/Post")
const { param } = require('../routes/User');

const GetPosts=async(req,res)=>{
    try{
        const posts = await Post.find().populate("author")
        res.status(201).json(posts)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const GetPostById=async(req,res)=>{
    try{
        const ID=req.params.id
        const post = await Post.findById(ID)
        res.status(201).json(post)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const CreatPost=async(req,res)=>{
    try{
        const {
            body:{content, author}
        }=req
        const post = await Post.create({content, author})
        res.status(201).json(post)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const UpdatePost=async(req,res)=>{
    try{
        const id =req.params.id
        const body=req.body

        const post = await Post.findByIdAndUpdate(id,body,{new:true})
        res.status(201).json(post)
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports={CreatPost,GetPosts,GetPostById,UpdatePost}