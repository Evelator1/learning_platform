const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
    body: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'InterviewQuestion', required: true },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const InterviewAnswer = mongoose.model('InterviewAnswer', answerSchema);

module.exports = InterviewAnswer;