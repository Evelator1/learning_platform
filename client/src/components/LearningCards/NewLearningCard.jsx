import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./learningCards.css";

export default function NewLearningCard() {
  const [flip, setFlip] = useState(false);

  const handleCardClick = () => {
    setFlip(!flip);
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6">
            <div className="card d-flex flex-column">
              <h5>Question</h5>
              <input
                type="text"
                style={{
                  width: "25rem",
                  height: "8rem",
                }}
                className="custom-input"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="card d-flex flex-column">
              <h5>Answer</h5>
              <input type="text" style={{ width: "25rem", height: "8rem" }} />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex align-items-center justify-content-center">
            <select class="form-select" aria-label="Default select example">
              <option selected>Select a category</option>
              <option value="1">Technical Question</option>
              <option value="2">Non-technical Question</option>
            </select>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <select class="form-select" aria-label="Default select example">
              <option selected>Select a group</option>
              <option value="1">Easy Question</option>
              <option value="2">Hard Question</option>
            </select>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-flex align-items-center justify-content-center">
            <button className="btn btn-primary savecardbtn">Save Card</button>
          </div>
        </div>
      </div>
    </>
  );
}
