import React from "react";
import LearningCardList from "./LearningCardList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function learningCard({ learningCard }) {
  console.log({ learningCard });
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div key={1} className="col-12 mt-5">
          <h1>{learningCard.question}</h1>
        </div>
      </div>
    </div>
  );
}
