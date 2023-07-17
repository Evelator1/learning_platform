const express = require('express');
const Post = require("../controllers/Post")


const postRouter=express.Router()

postRouter.get("/",Post.GetPosts)
postRouter.get("/:id",Post.GetPostById)
postRouter.put("/:id",Post.UpdatePost)

postRouter.post("/",Post.CreatPost)


module.exports=postRouter

