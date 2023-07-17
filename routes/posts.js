const express = require('express');
const {getPosts,getPostById,updatePost,creatPost} = require("../controllers/post")


const postRouter=express.Router()

postRouter.get("/",getPosts)
postRouter.get("/:id",getPostById)
postRouter.put("/:id",updatePost)

postRouter.post("/newPost",createPost)


module.exports=postRouter

