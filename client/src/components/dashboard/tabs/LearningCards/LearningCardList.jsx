import React, { useState, useEffect } from "react";
import { axiosClient } from "../../../../axiosClient";
import LearningCard from "./LearningCard";

export default function LearningCardList() {
  const [learningCards, setLearningCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

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
    if (nextIndex < filteredCards.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePreviousCard = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex < filteredCards.length && previousIndex >= 0) {
      setCurrentIndex(previousIndex);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredCards(learningCards);
    } else {
      const filtered = learningCards.filter(
        (learningCard) => learningCard.category === selectedCategory
      );
      setFilteredCards(filtered);
    }
    setCurrentIndex(0);
  }, [selectedCategory, learningCards]);

  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column">
        <div className="col mb-4 d-flex align-items-center justify-content-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">Filter by category</option>
            <option value="Technical question">Technical Question</option>
            <option value="Non-technical question">
              Non-technical Question
            </option>
          </select>
        </div>
        <div className="col">
          {filteredCards.length > 0 && (
            <LearningCard
              learningCard={filteredCards[currentIndex]}
              onNextCard={handleNextCard}
              onPreviousCard={handlePreviousCard}
              currentIndex={currentIndex}
              length={filteredCards.length}
            />
          )}
        </div>
      </div>
    </div>
  );
}
