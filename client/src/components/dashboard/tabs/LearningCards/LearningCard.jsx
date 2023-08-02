import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./learningCards.css";
// import Tooltip from "../../../Tooltip";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

export default function LearningCard({
  learningCard,
  onNextCard,
  onPreviousCard,
  currentIndex,
  length,}) {
  const [flip, setFlip] = useState(false);


  const tooltip = (
    <Tooltip id="tooltip">
      Click to Flip the Card
    </Tooltip>
  );

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
      <OverlayTrigger  overlay={tooltip}    delayShow={100} delayHide={1350} style={{position:"fixed", top:"4rem"}}>
        <div
          className={`card ${
            flip ? "flip" : ""
          } col-12 bg-black2 border border-white`}
          onClick={handleCardClick}
        >
          <div className="front text-white fs-5">
            <p>
              {currentIndex + 1}/{length}
            </p>
            <p>{learningCard.question}</p>
            <p>{learningCard.category}</p>
          </div>
          <div className="back text-white fs-5">{learningCard.answer}</div>
        </div>
        </OverlayTrigger>

        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <button
              onClick={handlePreviousClick}
              className="btn btn-light mt-4 bg-purple border-purple"
            >
              Previous Card
            </button>

            <button
              onClick={handleNextClick}
              className="btn btn-light mt-4 ms-3 bg-purple border-purple"
            >
              Next Card
            </button>
            <button
              className="btn btn-light bg-purple border-purple mt-4 ms-3"
              onClick={redirect}
            >
              Create New Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
