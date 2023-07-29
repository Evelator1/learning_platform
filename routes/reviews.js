
const express = require('express');
const { getReviews, getReviewById, updateReview, createReview } = require("../controllers/reviews");
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");

const upload = require("../middlewares/multer-upload");
const handleReviewCreation = require("../middlewares/handleReviewCreation");

const reviewRouter = express.Router();

reviewRouter.get("/", getReviews);
reviewRouter.get("/:id", getReviewById);

reviewRouter.post("/newReview", verifyToken, authorize("user"), upload.single("image"), handleReviewCreation, createReview);

reviewRouter.put("/:id", updateReview); // This is needed if you want to update a review, otherwise, you can remove it.


module.exports = reviewRouter;
