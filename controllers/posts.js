const Post = require("../models/post");
const fs = require("fs");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).populate("author").populate({
      path: "likes",
      model: "User", 
      select: "username"
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPostById = async (req, res) => {
  try {
    const ID = req.params.id;
    const post = await Post.findById(ID);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createPost = async (req, res) => {
    try {
      const { content, author, createdAt, postCategory } = req.body;
  
      let post;
  
      if (req.file) {
        // If an image is present, create the post with the image URL.
        post = await Post.create({
          image: req.file.secure_url,
          content,
          author,
          createdAt,
          postCategory,
          likes:[],
          comment:[],
          saves:[]
        });
        fs.unlinkSync(req.file.localPath);
      } else {
        // If no image is present, create the post without the image field.
        post = await Post.create({
          content,
          author,
          createdAt,
          postCategory,
        });
      }
     
      res.status(201).json(post);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

////
/// Do we Need the updatePost at all?
/// or leavit for later (extra)
/////////////////////////////////////
const updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const post = await Post.findByIdAndUpdate(id, body, { new: true });
    res.status(202).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createPost, getPosts, getPostById, updatePost };
