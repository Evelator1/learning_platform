const express = require('express');
const Comment = require("../controllers/Comments")


const commentRouter=express.Router()

commentRouter.get("/",Comment.GetComments)
commentRouter.get("/:id",Comment.GetCommentById)
commentRouter.put("/:id",Comment.UpdateComment)

commentRouter.post("/",Comment.CreatComment)


module.exports=commentRouter

