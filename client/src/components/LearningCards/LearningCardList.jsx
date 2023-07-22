import { React, useState } from "react";
import LearningCard from "./LearningCard";
import cardData from "./LearningCardsData";

export default function LearningCardList() {
  const [learningCards, setLearningCards] = useState(cardData);
  console.log(cardData);
  return (
    <div>
      {learningCards.map((learningCard) => {
        return (
          <LearningCard learningCard={learningCard} key={learningCard.id} />
        );
      })}
    </div>
  );
}
