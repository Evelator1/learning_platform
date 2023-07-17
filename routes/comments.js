const express = require('express');
const {getComments,getCommentById,updateComment,createComment} = require("../controllers/comments")


const commentRouter=express.Router()

commentRouter.get("/",getComments)
commentRouter.get("/:id",getCommentById)
commentRouter.put("/:id",updateComment)

commentRouter.post("/",createComment)


module.exports=commentRouter

