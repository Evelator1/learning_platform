import React, { useState } from "react";
import LearningCard from "./LearningCard";
import cardData from "./LearningCardsData";

export default function LearningCardList() {
  const [learningCards, setLearningCards] = useState(cardData);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <LearningCard
        learningCard={learningCards[currentIndex]}
        onNextCard={handleNextCard}
        onPreviousCard={handlePreviousCard}
        currentIndex={currentIndex}
        length={learningCards.length}
      />
    </div>
  );
}
