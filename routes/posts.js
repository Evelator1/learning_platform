const express = require('express');
const {getPosts,getPostById,updatePost,createPost} = require("../controllers/post")


const postRouter=express.Router()

postRouter.get("/",getPosts)
postRouter.get("/:id",getPostById)
postRouter.put("/:id",updatePost)

postRouter.post("/newPost",createPost)


module.exports=postRouter

