const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: 300
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    onPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment;
