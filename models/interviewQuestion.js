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
        upVotes: {
            type: [mongoose.Schema.Types.ObjectId],
            default: []
        },
        downVotes: {
            type: [mongoose.Schema.Types.ObjectId],
            default: [],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        isTechnical: {
            type: Boolean
        },
        positionLevel: {
            type: String,
            enum: ["junior", "senior"],

        },
        technology: {
            type: String,
            enum: ["node", "express", "react", "javascript", "html", "css", "sql", "mysql", "mongodb", "bootstrap", "other", ""],


        },
        updatedAt: { type: Date, default: Date.now },
        saves: [
            {
                type: [mongoose.Schema.Types.ObjectId],
                ref: "User"
            }
        ]
    }
)

const InterviewQuestion = mongoose.model("InterviewQuestion", questionSchema)
module.exports = InterviewQuestion
