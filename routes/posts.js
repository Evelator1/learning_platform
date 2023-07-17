const express = require('express');
const {creatPost,getPosts,getPostById,updatePost} = require("../controllers/posts")


const postRouter=express.Router()

postRouter.get("/",getPosts)
postRouter.get("/:id",getPostById)
postRouter.put("/:id",updatePost)

postRouter.post("/",creatPost)


module.exports=postRouter

