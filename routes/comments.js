const express = require('express');
const {getComments,getCommentById,updateComment,creatComment} = require("../controllers/Comments")


const commentRouter=express.Router()

commentRouter.get("/",getComments)
commentRouter.get("/:id",getCommentById)
commentRouter.put("/:id",updateComment)

commentRouter.post("/",creatComment)


module.exports=commentRouter

