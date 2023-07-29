const Review = require("../models/review");
const fs = require("fs");

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }).populate("author");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getReviewById = async (req, res) => {
  try {
    const ID = req.params.id;
    const review = await Review.findById(ID);
    res.status(200).json(review);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createReview = async (req, res) => {
    try {
      const { title, content, author, createdAt, postCategory } = req.body;
  
      let review;
  
      if (req.file) {
        // If an image is present, create the review with the image URL.
        review = await Review.create({
          image: req.file.secure_url,
          title,
          content,
          author,
          createdAt,
          postCategory,
        });
        fs.unlinkSync(req.file.localPath);
      } else {
        // If no image is present, create the review without the image field.
        review = await Review.create({
          title,
          content,
          author,
          createdAt,
          postCategory,
        });
      }
  
      res.status(201).json(review);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  

////
/// Do we Need the updateReview at all?
/// or leavit for later (extra)
/////////////////////////////////////
const updateReview = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const review = await Review.findByIdAndUpdate(id, body, { new: true });
    res.status(202).json(review);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getReviews, getReviewById, updateReview, createReview };
