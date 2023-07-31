import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./learningCards.css";

export default function LearningCard({
  learningCard,
  onNextCard,
  onPreviousCard,
  currentIndex,
  length,
}) {
  const [flip, setFlip] = useState(false);

  const handleCardClick = () => {
    setFlip(!flip);
  };

  const handleNextClick = () => {
    setFlip(false);
    onNextCard();
  };

  const handlePreviousClick = () => {
    setFlip(false);
    onPreviousCard();
  };

  let navigate = useNavigate();
  const redirect = () => {
    let path = "createlearningcard";
    navigate(path);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center text-center">
      <div className="row d-flex justify-content-center align-items-center">
        <div
          className={`card ${flip ? "flip" : ""} col-12`}
          onClick={handleCardClick}
        >
          <div className="front">
            <p>
              {currentIndex + 1}/{length}
            </p>
            <p>{learningCard.question}</p>
            <p>{learningCard.category}</p>
          </div>
          <div className="back">{learningCard.answer}</div>
        </div>
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <button
              onClick={handlePreviousClick}
              className="btn btn-light mt-5"
            >
              Previous Card
            </button>

            <button
              onClick={handleNextClick}
              className="btn btn-light mt-5 ms-3"
            >
              Next Card
            </button>

            <button className="btn btn-light mt-5 ms-3" onClick={redirect}>
              Create New Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
