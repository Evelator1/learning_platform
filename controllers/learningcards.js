const Learningcard = require("../models/learningcards");

const createLearningcard = async (req, res) => {
  try {
    const { question, answer, category, group } = req.body;
    const card = await Learningcard.create({
      question,
      answer,
      category,
      group,
      author: req.user.id,
    });
    res.status(201).json(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getLearningcard = async (req, res) => {
  try {
    const card = await Learningcard.find({ author: req.user.id });
    res.status(201).json(card);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteLearningCard = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Learningcard.deleteOne({ id });
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

module.exports = { createLearningcard, getLearningcard, deleteLearningCard };
