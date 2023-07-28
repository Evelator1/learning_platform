
const express = require('express');
const { getPosts, getPostById, updatePost, createPost } = require("../controllers/posts");
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");

const upload = require("../middlewares/multer-upload");
const handlePostCreation = require("../middlewares/handlePostCreation");

const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/:id", getPostById);


postRouter.post("/newPost", verifyToken, authorize("user"), upload.single("image"), handlePostCreation, createPost);

postRouter.put("/:id", updatePost); // This is needed if you want to update a post, otherwise, you can remove it.


module.exports = postRouter;
