const Learningcard = require("../models/learningcards");

const createLearningcard = async (req, res) => {
  try {
    const { question, answer, category, group } = req.body;
    const card = await Learningcard.create({
      question,
      answer,
      category,
      group,
    });
    res.status(201).json(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getLearningcard = async (req, res) => {
  try {
    const card = await Learningcard.find();
    res.status(201).json(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createLearningcard, getLearningcard };
