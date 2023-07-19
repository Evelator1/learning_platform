const express = require('express');
const {getComments,getCommentByPostId,updateComment,createComment} = require("../controllers/comments")


const commentRouter=express.Router()

commentRouter.get("/",getComments)
commentRouter.get("/posts/:id",getCommentByPostId)
commentRouter.put("/:id",updateComment)

commentRouter.post("/",createComment)


module.exports=commentRouter

