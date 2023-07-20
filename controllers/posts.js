const Post =require("../models/post")
//const { param } = require('../routes/user');

const getPosts=async(req,res)=>{
    try{
        const posts = await Post.find().sort({ createdAt: -1 }).populate("author")
        res.status(200).json(posts)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const getPostById=async(req,res)=>{
    try{
        const ID=req.params.id
        const post = await Post.findById(ID)
        res.status(200).json(post)
    }catch(error){
        res.status(500).send(error.message)
    }
}

const createPost=async(req,res)=>{
    console.log(req)
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

const updatePost=async(req,res)=>{
    try{
        const id =req.params.id
        const body=req.body

        const post = await Post.findByIdAndUpdate(id,body,{new:true})
        res.status(202).json(post)
    }catch(error){
        res.status(500).send(error.message)
    }
}

module.exports={createPost,getPosts,getPostById,updatePost}
