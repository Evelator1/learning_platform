const express = require('express');
const {getPosts,getPostById,updatePost,createPost} = require("../controllers/posts")
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");
const {cloudinaryUpload} = require("../middlewares/cloudinary-upload");
const upload = require("../middlewares/multer-upload");

const postRouter=express.Router()

postRouter.get("/",getPosts)
postRouter.get("/:id",getPostById)

postRouter.post("/newPost", verifyToken, authorize("user") ,  createPost)
//upload.single("image"), cloudinaryUpload,
postRouter.put("/:id",updatePost)//  is it needed??

module.exports=postRouter

