const express = require("express");
const {createComment, getComments, getCommentById, updateComment} = require("../controllers/comments");

const commentRouter = express.Router();

commentRouter.get("/", getComments);
commentRouter.get("/:id", getCommentById);
commentRouter.put("/:id", updateComment);

commentRouter.post("/", createComment);

module.exports = commentRouter;
