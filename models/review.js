const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    max: 300,
  },
  content: {
    type: String,
    required: true,
    max: 3000,
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
    default: false,
  },
  likes: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: "User" 
  },
  favourite: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: "User" 
  },
  postCategory:{
    type:String, enum:["interviewQuestion","review","communityReview"],
    required: true
  }
});

const Review = mongoose.model("Review", postSchema);

module.exports = Review;
