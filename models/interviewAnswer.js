const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'InterviewQuestion',
        required: true
    },
    answerContent: {
        type: String,
        required: true
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
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const InterviewAnswer = mongoose.model('InterviewAnswer', answerSchema);

module.exports = InterviewAnswer;