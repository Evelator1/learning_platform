const express = require('express');
const {getPosts,getPostById,updatePost,createPost} = require("../controllers/posts")
const { verifyToken } = require("../middelwares/verifyToken");
const { authorize } = require("../middelwares/authorize");

const postRouter=express.Router()

postRouter.get("/",getPosts)
postRouter.get("/:id",getPostById)
postRouter.put("/:id",updatePost)

postRouter.post("/newPost", verifyToken, authorize("user") ,createPost)


module.exports=postRouter

