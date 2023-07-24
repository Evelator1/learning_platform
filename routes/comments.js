const express = require('express');
const { getComments, getCommentByPostId, updateComment, createComment } = require("../controllers/comments")
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");


const commentRouter = express.Router()

commentRouter.get("/", getComments)
commentRouter.get("/posts/:id", getCommentByPostId)
commentRouter.put("/:id", updateComment)

commentRouter.post("/newComment",verifyToken, authorize("user") , createComment)


module.exports = commentRouter

