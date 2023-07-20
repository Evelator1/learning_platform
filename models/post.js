const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    max: 300,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image:{
    type:String,
    default:""
  },
  likes: { type: [mongoose.Schema.Types.ObjectId], ref: "User" },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
