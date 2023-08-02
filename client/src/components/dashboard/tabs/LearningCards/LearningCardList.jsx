import React, { useState, useEffect } from "react";
import { axiosClient } from "../../../../axiosClient";
import LearningCard from "./LearningCard";
import { Navigate } from "react-router-dom";
import "./learningCards.css";

export default function LearningCardList() {
  const [learningCards, setLearningCards] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  // const [filteredCards2, setFilteredCards2] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/learningcards")
      .then((response) => {
        setLearningCards(response.data);
        setFilteredCards(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
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
    } else if (selectedGroup === "") {
      setFilteredCards(learningCards);
    } else {
      const filtered = learningCards.filter(
        (learningCard) =>
          learningCard.category === selectedCategory &&
          learningCard.group === selectedGroup
      );
      setFilteredCards(filtered);
    }
    setCurrentIndex(0);
  }, [selectedCategory, selectedGroup, learningCards]);

  if (!isLoading && learningCards && !learningCards.length) {
    return <Navigate to="createlearningcard" />;
  }
  if (
    learningCards &&
    learningCards.length &&
    !isLoading &&
    filteredCards.length
  ) {
    return (
      <div className="container-fluid l-cards-container">
        <div className="row d-flex flex-column align-items-center justify-content-center">
          <div className="col d-flex flex-column align-items-center justify-content-center text-white mb-4">
            <h2>Your learning cards</h2>
            {/* <p className="text-white">Click card to see the answer</p> */}
          </div>
          <div className="col d-flex align-items-center justify-content-center gap-4">
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="p-2 mb-4 rounded"
            >
              <option value="">Filter by level of difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Hard">Hard</option>
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 mb-4 rounded"
            >
              <option value="">Filter by category</option>
              <option value="Technical question">Technical Question</option>
              <option value="Non-technical question">
                Non-technical Question
              </option>
            </select>
          </div>

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
    );
  }
}
