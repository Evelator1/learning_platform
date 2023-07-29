import React, { useState } from "react";
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

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center text-center">
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
        <div>
          <button
            onClick={handlePreviousClick}
            className="btn btn-light mt-5 me-3"
          >
            Previous Card
          </button>
          <button onClick={handleNextClick} className="btn btn-light mt-5 ms-3">
            Next Card
          </button>
        </div>
      </div>
    </div>
  );
}
