import React, { useState, useEffect } from "react";
import { axiosClient } from "../../../../axiosClient";
import LearningCard from "./LearningCard";

export default function LearningCardList() {
  const [learningCards, setLearningCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axiosClient
      .get("http://localhost:3010/learningcards")
      .then((response) => {
        setLearningCards(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleNextCard = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < learningCards.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePreviousCard = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex < learningCards.length && previousIndex >= 0) {
      setCurrentIndex(previousIndex);
    } else {
      setCurrentIndex(learningCards.length - 1);
    }
  };

  return (
    <div>
      {learningCards.length > 0 && (
        <LearningCard
          learningCard={learningCards[currentIndex]}
          onNextCard={handleNextCard}
          onPreviousCard={handlePreviousCard}
          currentIndex={currentIndex}
          length={learningCards.length}
        />
      )}
    </div>
  );
}
