import React, { useState, useEffect } from "react";
import { axiosClient } from "../../../../axiosClient";
import LearningCard from "./LearningCard";

export default function LearningCardList() {
  const [learningCards, setLearningCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");

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
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="">Filter by category</option>
        <option value="Technical question">Technical Question</option>
        <option value="Non-technical question">Non-technical Question</option>
      </select>

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
