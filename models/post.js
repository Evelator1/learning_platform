const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    max: 300,
  },
  image: {
     type: String,
     default:"" 
    },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  draft:{
    type:Boolean,
    default: true,
  },
  likes: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
