const mongoose = require("mongoose")


const questionSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            max: 500,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        votes: {
            type: Number,
            default: 0
        },
        upVotes:{
            type:[mongoose.Schema.Types.ObjectId],
            default:[]
        },
        downVotes: {
            type: [mongoose.Schema.Types.ObjectId],
            default: [],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        isTechnical:{
            type: Boolean,
            default:true
        },
        updatedAt: { type: Date, default: Date.now }
    }
)

const InterviewQuestion = mongoose.model("InterviewQuestion", questionSchema)
module.exports = InterviewQuestion