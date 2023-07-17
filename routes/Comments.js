const express = require('express');
const Comment = require("../controllers/Comments")


const commentRouter=express.Router()

commentRouter.get("/",Comment.getComments)
commentRouter.get("/:id",Comment.getCommentById)
commentRouter.put("/:id",Comment.updateComment)

commentRouter.post("/",Comment.creatComment)


module.exports=commentRouter

